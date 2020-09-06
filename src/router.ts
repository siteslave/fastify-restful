import { FastifyInstance } from 'fastify';

import indexRoute from './controllers/index'

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexRoute, { prefix: '/' });
}
