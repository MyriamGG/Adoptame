const express = require("express");
const { getPay } = require("../controllers-Pet/MercadoPago");

const router = express.Router();


router.get("/",getPay)


module.exports = router;