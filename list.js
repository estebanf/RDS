async function routes(fastify, options) {
  fastify.post('/:object/list', async (req,reply) => {
    const object = req.params.object;
    const db = fastify.mongo.db;
    const docs = await db.collection(object).find().toArray();

    reply.code(200);
    return {
      listname: req.body.listname,
      title: "List of " + object,
      desc: "List of " + object,
      items: docs
    }
  })
}
module.exports = routes
