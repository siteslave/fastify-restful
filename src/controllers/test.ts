import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { Knex } from 'knex'
import { TestModel } from '../models/test'

export default async function test(fastify: FastifyInstance) {

  const testModel = new TestModel()

  fastify.get('/db', async (request: FastifyRequest, reply: FastifyReply) => {
    const db: Knex = fastify.knex
    try {
      const rs: any = await testModel.test(db)

      reply.send(rs)
    } catch (error: any) {
      reply.send({ message: error.message })
    }
  })

}
