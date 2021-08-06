const axios = require("axios").default;

async function routes(fastify, options) {
  fastify.post('/lg/books/list', async (req,reply) => {
    const object = req.params.object;

    let reqOptions = {
      method: 'POST',
      url: 'http://3.37.251.241:8080/bizarest',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        actID: 'BRS_SearchBook',
        inDTName: 'BookSearchCond',
        outDTName:'BookSearchResult',
        refDS:{
          BookSearchCond:[
            { BookName:'',Author:'LG CNS', Keyword: ''}
          ]
        }
      }
    }
    let response = await axios.post('http://3.37.251.241:8080/bizarest',{
      actID: 'BRS_SearchBook',
      inDTName: 'BookSearchCond',
      outDTName:'BookSearchResult',
      refDS:{
        BookSearchCond:[
          { BookName:'',Author:'LG CNS', Keyword: ''}
        ]
      }});
    console.log(response.data.result.BookSearchResult);
    reply.code(200);
    return {
      listname: req.body.listname,
      title: "List of books",
      desc: "List of books",
      items: response.data.result.BookSearchResult
    }

  })
}
module.exports = routes
