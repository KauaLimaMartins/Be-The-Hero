const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const Routes = require("./routes");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(errors());
  }

  routes() {
    this.server.use(Routes);
    this.server.use(cors());
  }
}

module.exports = new App().server;
