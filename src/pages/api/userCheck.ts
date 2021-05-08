import jwt from 'jsonwebtoken'
import { Document, LeanDocument, Query } from 'mongoose'

import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../../services/database/Schema/usersSchema'

type UserToken = {
  id: string
}

interface UserType extends Document {
  name: string
}

export default async function userCheck(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { user__token } = request.cookies

  try {
    const userToken = jwt.verify(
      user__token,
      process.env.JWT_SECRET
    ) as UserToken

    if (userToken.id) {
      const user = (
        await Users.findById(userToken.id)
      ).toObject() as LeanDocument<UserType>

      if (user) {
        const { name } = user

        return response.status(200).send({ name })
      }
    }

    return response.status(400).send(false)
  } catch (err) {
    return response.status(400).send(false)
  }
}
