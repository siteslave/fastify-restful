import { FastifyInstance } from 'fastify';

import indexRoute from './index'

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexRoute, { prefix: '/' });
}
