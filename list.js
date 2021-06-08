async function routes(fastify, options) {
  fastify.post('/employees/list', async (req,reply) => {
    return {
      listname: "All employees",
      title: "All employees list",
      desc: "List of all employees",
      items: [
        {employeeId: "1", name: "Esteban"},
        {employeeId: "2", name: "Jose"},
        {employeeId: "3", name: "Felipe"},
        {employeeId: "4", name: "Mujica"},
      ]
    }
  })
}
module.exports = routes
