const fastify = require('fastify')({
  logger: true
})


const start = async () => {
  try {
    fastify.register(require('fastify-mongodb'), {
      forceClose: true,
      url: 'mongodb://localhost:27017/mydb'
    })
    fastify.register(require('./list'));
    fastify.register(require('./save'));
    fastify.register(require('./lookup'));
    fastify.register(require('./view'));
    fastify.register(require('./save_action'));
    fastify.register(require('./lg'));

    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start()
