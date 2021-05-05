import jwt from 'jsonwebtoken'

import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../../services/database/Schema/usersSchema'

type UserToken = {
    id: string
}

export default async function userCheck (request: NextApiRequest, response: NextApiResponse) {

    const { user__token } = request.cookies
 
    try{
        const userToken = jwt.verify(user__token, process.env.JWT_SECRET) as UserToken

        if(userToken.id){
            const user = Users.findById(userToken.id)

            if(user) return response.status(200).send(true)
        }

        return response.status(400).send(false)
        
    }catch(err){
        return response.status(400).send(false)
    }


}