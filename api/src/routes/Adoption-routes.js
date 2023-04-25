const express = require("express");
const router = express.Router();
const { adoptPet } = require("../controllers-Pet/Adoption-controllers");




router.post('/',adoptPet)


module.exports = router;