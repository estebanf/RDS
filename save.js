async function routes(fastify, options) {
  fastify.post('/:object/save', async (req,reply) => {
    const object = req.params.object;
    const db = fastify.mongo.db;
    try{
        await db.collection(object).insertOne(req.body.header);
        reply.code(200);
        return {
	         status: "success",
	         messagetitle: "success",
	         message: "success",
	         fielderrors: []
         }
       } catch (err) {
         reply.code(500);
         return {
 	         status: "error",
 	         messagetitle: err.message,
 	         message: err.stack,
 	         fielderrors: []
          }
       }
    })
  }

module.exports = routes
