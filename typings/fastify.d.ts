import * as knex from 'knex'

declare module 'fastify' {
  interface FastifyInstance {
    knex: knex
  }
}

