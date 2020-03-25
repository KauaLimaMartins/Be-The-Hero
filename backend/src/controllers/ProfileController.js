const connection = require("../database/connection");

class ProfileController {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const allIncidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(allIncidents);
  }
}

module.exports = new ProfileController();
