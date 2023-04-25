const express = require("express");
const router = express.Router();
const {
  createDiseases,
  getDiseases,
} = require("../controllers-Pet/Diseases-controller");


router.get("/", getDiseases); //trae todas las enfermedades
router.post("/", createDiseases); //crea una enfermedad


module.exports = router;