import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { CustomerModel } from '../models/customer'

export default async function customers(fastify: FastifyInstance) {

  const customerModel = new CustomerModel()
  const db: any = fastify.knex

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await customerModel.list(db)
      reply.send(rs)
    } catch (error: any) {
      reply.code(500).send({ ok: false, error: error.message })
    }
  })

}
