import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async function index(fastify: FastifyInstance) {

  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Hello wolrd!' })
  })

}
