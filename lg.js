const axios = require("axios").default;

async function routes(fastify, options) {
  fastify.post('/lg/books/list', async (req,reply) => {
    const object = req.params.object;

    let response = await axios.post('http://3.37.251.241:8080/bizarest',{
      actID: 'BRS_SearchBook',
      inDTName: 'BookSearchCond',
      outDTName:'BookSearchResult',
      refDS:{
        BookSearchCond:[
          { BookName:'',Author:'', Keyword: ''}
        ]
      }});
    reply.code(200);
    return {
      listname: req.body.listname,
      title: "List of books",
      desc: "List of books",
      items: response.data.result.BookSearchResult
    }

  });
  fastify.post('/lg/books/save', async (req,reply) => {
    console.log(req.body);
    reply.code(200);
    return {}
  });
  fastify.post('/lg/books/view', async (req,reply) => {
    console.log(req.body);
    reply.code(200);
    return {}
  });
}
module.exports = routes
