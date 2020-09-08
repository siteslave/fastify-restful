import * as knex from 'knex'
import * as jsonwebtoken from 'jsonwebtoken';

declare module 'fastify' {
  interface FastifyInstance {
    knex: knex
    jwt: jsonwebtoken
    authenticate: any
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
  }

  interface RouteShorthandOptions {
    websocket?: boolean
  }

  interface RouteShorthandMethod {
    (
      path: string,
      opts: any,
      handler: any,
      params?: { [key: string]: any }
    );
  }
}

