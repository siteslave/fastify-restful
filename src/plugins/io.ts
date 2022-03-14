import fp from 'fastify-plugin'

module.exports = fp(async function (fastify: any, opts: any, done: any) {

  const io = require('socket.io')(fastify.server, opts);
  fastify.decorate('io', io)
  done()

})