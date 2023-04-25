const express = require("express");
const router = express.Router();
const {
  createReview,
  getReview,
} = require("../controllers-Pet/Review-controller");


router.get("/", getReview); //trae todas las enfermedades
router.post("/", createReview); //crea una enfermedad


module.exports = router;