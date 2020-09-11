import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { AxiosResponse } from 'axios'

export default async function webService(fastify: FastifyInstance) {

  fastify.get('/demo', async (request: FastifyRequest, reply: FastifyReply) => {
    const rs: AxiosResponse = await fastify.axios.v2.get('/?gender=female')
    reply.send(rs.data)
  })

  fastify.get('/private', async (request: FastifyRequest, reply: FastifyReply) => {
    const data = 'ADMIN:SECRETE123'
    let buff = new Buffer(data)
    let base64data = buff.toString('base64')
    const rs: AxiosResponse = await fastify.axios.v1.get('/employees', {
      headers: {
        'Authorization': "Basic " + base64data,
        'Content-Type': 'application/json'
      }
    })
    reply.send(rs.data)
  })

}
