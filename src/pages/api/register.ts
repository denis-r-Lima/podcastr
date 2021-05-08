import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../../services/database/Schema/usersSchema'

export default async function Register(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const user = await Users.create(request.body)

    return response.send({ user })
  } catch (err) {
    console.log(err)
    return response.status(400).send({ error: 'Registration fail!' })
  }
}
