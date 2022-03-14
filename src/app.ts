import * as fastify from 'fastify'
import routers from './router'
import { join } from 'path'

const multer = require('fastify-multer')

require('dotenv').config({ path: join(__dirname, '../config.conf') })

const app: fastify.FastifyInstance = fastify.fastify({
  logger: { level: 'info' }
})

app.register(multer.contentParser)

app.register(require('fastify-formbody'))
app.register(require('fastify-cors'), {})
// First connection
app.register(require('./plugins/db'), {
  connectionName: 'knex',
  options: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      port: Number(process.env.DB_PORT) || 3306,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'test',
    },
    pool: {
      min: 5,
      max: Number(process.env.DB_MAX_CONNECTION) || 100
    },
    debug: process.env.DB_DEBUG === 'Y' ? true : false,
  }
})

app.register(require('./plugins/jwt'), {
  secret: process.env.SECRET_KEY || '@1234567890@'
})

// Axios
app.register(require('fastify-axios'), {
  clients: {
    v1: {
      baseURL: 'https://apingweb.com/api/rest',
    },
    v2: {
      baseURL: 'https://randomuser.me/api'
    }
  }
})


app.ready(err => {
  if (err) throw err
})

app.register(routers)

export default app;