import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'
import { Document } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

import Users from '../../services/database/Schema/usersSchema'

interface UsersType extends Document{
    name: string
    email: string
    password: string
    createdAt: number
}

export default async function authenticate(request: NextApiRequest, response: NextApiResponse){
    const { email, password } = request.body

    const user = await Users.findOne({ email }).select('+password') as UsersType

    if(!user){
        return response.status(400).send({ error: 'User not found!' })
    }

    const checkPassword = await bcrypt.compare(password , user.password)

    if(checkPassword){
        
        const expiresInSeconds =  10*24*60*60 //10 days in seconds
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: expiresInSeconds
        })
        return response.status(200).send({ token })
    }

    return response.status(400).send({ error: "Password doesn't match" })

}