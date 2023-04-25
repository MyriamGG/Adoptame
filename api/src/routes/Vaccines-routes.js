const express = require("express");
const router = express.Router();
const {
  createVaccines,
  getVaccines,
} = require("../controllers-Pet/Vaccines-controller");


router.get("/", getVaccines); //trae todas las vacunas
router.post("/", createVaccines); //crea una vacuna


module.exports = router;