import * as knex from 'knex'
import * as jsonwebtoken from 'jsonwebtoken';
import { AxiosInstance } from 'axios';
declare module 'fastify' {
  interface FastifyInstance {
    knex: knex
    jwt: jsonwebtoken
    authenticate: any
    axios: AxiosInstance | any
    qrcode: any
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
    file: any
    files: any[]
  }

}

