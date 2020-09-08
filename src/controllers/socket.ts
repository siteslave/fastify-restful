import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async function webSocket(fastify: FastifyInstance) {

  fastify.get('/:id', { websocket: true }, (connection: any, request: FastifyRequest, params: any) => {
    console.log(params)
    connection.socket.on('message', (message: any) => {
      console.log(message)
      connection.socket.send(message)
    })
  })

}

