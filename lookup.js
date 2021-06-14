async function routes(fastify, options) {
  fastify.post('/:object/lookup', async (req,reply) => {
    return {
      // listname: "All employees",
      // title: "All employees list",
      // desc: "List of all employees",
      // items: [
      //   {EmployeeId: "1", Name: "Esteban"},
      //   {EmployeeId: "2", Name: "Jose"},
      //   {EmployeeId: "3", Name: "Felipe"},
      //   {EmployeeId: "4", Name: "Mujica"},
      // ]
    }
  })
}
module.exports = routes
