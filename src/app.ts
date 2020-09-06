import * as fastify from 'fastify'
import routers from './router'

const app: fastify.FastifyInstance = fastify.fastify({
  logger: { level: 'info' }
})

app.register(require('fastify-formbody'))
app.register(require('fastify-cors'), {})
app.register(require('fastify-knexjs'), {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '789124',
    database: 'test',
  },
  pool: {
    min: 0,
    max: 100
  },
  debug: true,
})

app.register(routers)

export default app;