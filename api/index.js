const app = require("./src/app");
const { conn } = require("./src/db.js");
const {precargaLocation} = require("./src/services/precargaLocation");
const {precargaDiseases} = require("./src/services/precargaDiseases");
const {precargaVaccines} = require("./src/services/precargaVaccines")

const {PORT}=process.env;

conn.sync( {force: false }).then( () => {
    precargaLocation();
    precargaDiseases();
    precargaVaccines();

    app.listen(3000, () => {
        console.log(`Listening in port ${PORT}`)
    })
})
