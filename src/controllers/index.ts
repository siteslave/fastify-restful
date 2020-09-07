import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async function index(fastify: FastifyInstance) {

  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Hello wolrd!' })
  })

  fastify.get('/jwt/sign', (request: FastifyRequest, reply: FastifyReply) => {
    const token = fastify.jwt.sign({ message: 'Fastify very fast!' })
    reply.send({ token })
  })

  fastify.get('/jwt/verify', {
    preValidation: [fastify.authenticate]
  }, (request: FastifyRequest, reply: FastifyReply) => {
    const decoded: any = request.user
    reply.send({ message: 'Protected area!', decoded })
  })

}
