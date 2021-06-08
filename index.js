const fastify = require('fastify')({
  logger: true
})

fastify.register(require('./list'))

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
