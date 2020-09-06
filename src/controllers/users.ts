import * as crypto from 'crypto'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { UserModel } from '../models/user'

export default async function users(fastify: FastifyInstance) {

  const userModel = new UserModel()

  const db: any = fastify.knex

  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body

    const firstName = body.firstName
    const lastName = body.lastName

    const username = body.username
    const password = body.password

    const encPassword = crypto.createHash('md5').update(password).digest('hex')
    try {
      const data: any = {}
      data.first_name = firstName
      data.last_name = lastName
      data.username = username
      data.password = encPassword

      await userModel.create(db, data)

      reply.send(data)
    } catch (error) {
      reply.send({ message: error.message })
    }
  })

}
