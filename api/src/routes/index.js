const { Router } = require("express");
const router = Router();
const Autenticacion = require('../middleware/Autenticacion')
const middlewareToken = require('../middleware/middlewareToken')
const allRoutes = require("./allRoutes");

  //===================
const verifyJwt = Autenticacion();
const data =  middlewareToken();
router.use("/api", allRoutes);


module.exports = router;

