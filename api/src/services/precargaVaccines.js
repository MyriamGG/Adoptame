const {Vaccines} = require("../db");
const {vaccines} = require("../controllers-Pet/arreglos");

async function precargaVaccines(){
    const vaccine = await Vaccines.findAll();

    if (vaccine.length === 0) {
        // Location.bulkCreate(locations);

        for (let i = 0; i < vaccines.length; i++){
            let name = vaccines[i]
            await Vaccines.create({name});
        }
    }
}

module.exports = {precargaVaccines};