const express = require("express");
const { celebrate } = require("celebrate");

const Routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const sessionValidator = require("./validators/sessionValidator");
const ongValidator = require("./validators/ongValidator");
const profileValidator = require("./validators/profileValidator");
const incidentIdValidator = require("./validators/incidentIdValidator");
const incidentPageValidator = require("./validators/incidentPageValidator");
const incidentBodyValidator = require("./validators/incidentBodyValidator");
const incidentHeaderValidator = require("./validators/incidentHeaderValidator");

// Validate login id
Routes.post("/sessions", celebrate(sessionValidator), SessionController.store);

// Routes fro NGOs
Routes.get("/ongs", OngController.index);
Routes.post("/ongs", celebrate(ongValidator), OngController.store);

// List all incidents from all NGOs
Routes.get("/profile", celebrate(profileValidator), ProfileController.index);

// Routes for incidents
Routes.get(
  "/incidents",
  celebrate(incidentPageValidator),
  IncidentController.index
);
Routes.post(
  "/incidents",
  celebrate(incidentBodyValidator),
  celebrate(incidentHeaderValidator),
  IncidentController.store
);
Routes.delete(
  "/incidents/:id",
  celebrate(incidentIdValidator),
  IncidentController.destroy
);

module.exports = Routes;
