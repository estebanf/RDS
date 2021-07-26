const moment = require('moment');
const axios = require("axios").default;

async function routes(fastify, options) {
  fastify.post('/save_action/customer_product', async (req,reply) => {
    let input = req.body;
    let registrationId = input.data[0].turboid;
    let dateOfPurchase = input.data[0].nugdh_date_of_purchase;
    let term = input.data[0].nugdh_warranty_term;
    let endOfWarranty = moment(1627257600000).add(term, 'M').format('YYYY-MM-DD');

    var updateOptions = {
      method: 'PATCH',
      url: "https://login.appify.com/api/data/v1.0/appifydemo/objects/nugdh_customer_products('" + registrationId + "')",
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ZGVwb3RhZG1pbkBhcHBpZnkuY29tOkFwcGlmeUAxMjM='
      },
      data: {nugdh_end_of_warranty: endOfWarranty }
    };
    console.log("--------- NEW SAVE ACTION REQUEST ------------")
    console.log("Registration ID: " + registrationId);
    console.log("Date of purchase: " + dateOfPurchase);
    console.log("Term: " + term);
    console.log("Calculated end of warranty: " + endOfWarranty);
    console.log("Submitting update....");

    axios.request(updateOptions)
      .then(
        function(response) {
          console.log("Update successful!")
          console.log("----------------------------------")

        }
      )
      .catch(
        function(error){
          console.log("Update failed :(")
          console.log(error);
          console.log("----------------------------------")
          reply.code(500);
          throw error;

        });
    reply.code(200);
    return {}
    })
}
module.exports = routes
