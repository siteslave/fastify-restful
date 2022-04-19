import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { Knex } from 'knex'
import { CustomerModel } from '../models/customer'

export default async (fastify: FastifyInstance) => {

  const customerModel = new CustomerModel()
  const db: Knex = fastify.knex

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await customerModel.list(db)
      reply.send(rs)
    } catch (error: any) {
      reply.code(500).send({ ok: false, error: error.message })
    }
  })

}
