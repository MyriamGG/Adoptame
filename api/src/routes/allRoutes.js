const express = require("express");
const router2 = express.Router();

const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diseases = require("./Diseases-routes");
const Location = require("./Location-routes");
const Usuario = require("./Usuario-routes");
const Payment = require("./Payment-routes");
const Admin = require("./Admin-Routes")
const Adoption = require("./Adoption-routes")
const Review = require('./review-routes')


  
router2.get("/", (req, res) => {
    res.status(200).send("Su token de acceso fue verificado satisfactoriamente!!");
})

router2.use("/pets", Pet);
router2.use("/vaccines", Vaccines);
router2.use("/diseases", Diseases);
router2.use("/locations", Location);
router2.use("/users", Usuario);
router2.use("/payments",Payment);
router2.use("/admin", Admin)
router2.use("/adoption",Adoption)
router2.use("/review", Review);


module.exports = router2;