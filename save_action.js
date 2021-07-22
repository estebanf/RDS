async function routes(fastify, options) {
  fastify.post('/save_action/customer_product', async (req,reply) => {
    // const object = req.params.object;
    // const db = fastify.mongo.db;
    // const docs = await db.collection(object).find().toArray();
    //
    // reply.code(200);
    // return {
    //   listname: req.body.listname,
    //   title: "List of " + object,
    //   desc: "List of " + object,
    //   items: docs
    // }
    console.log("--------- NEW REQUEST ------------")
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.body)
    console.log("----------------------------------")
    reply.code(200);
    return {}
  })
}
module.exports = routes
