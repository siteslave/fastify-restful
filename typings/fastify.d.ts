import * as knex from 'knex'
import * as jsonwebtoken from 'jsonwebtoken';

declare module 'fastify' {
  interface FastifyInstance {
    knex: knex
    knex2: knex
    jwt: jsonwebtoken
    authenticate: any
    ws: any
    io: any
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
    file: any
    files: any[]
  }

}

