import { FastifyInstance } from 'fastify';

import indexRoute from './controllers/index'
import demoRoute from './controllers/demo'

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexRoute, { prefix: '/' });
  fastify.register(demoRoute, { prefix: '/demo' });
}
