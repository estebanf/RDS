async function routes(fastify, options) {
  fastify.post('/:object/lookup', async (req,reply) => {
    const object = req.params.object;
    const db = fastify.mongo.db;
    const docs = await db.collection(object).find().toArray();

    reply.code(200);
    return {
      lookupname: "<name of the lookup>",
    	lookupid: "<unique id representing this lookup>",
    	desc: "<lookup description>",
    	id: "<name of the id field>",
    	display: "{fieldname1} {fieldname2} text",
    	rows: docs
      }
    })
  }
module.exports = routes
