const {Diseases} = require("../db");
const {diseases} = require("../controllers-Pet/arreglos");

async function precargaDiseases(){
    const disease = await Diseases.findAll();

    if (disease.length === 0) {
        // Location.bulkCreate(locations);

        for (let i = 0; i < diseases.length; i++){
            let name = diseases[i].name;
            let severity = diseases[i].severity;
            await Diseases.create({name, severity });
        }
    }
}

module.exports = {precargaDiseases};