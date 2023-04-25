const {Location} = require("../db");
const {locations} = require("../controllers-Pet/arreglos");
async function precargaLocation(){
    const location = await Location.findAll();

    if (location.length === 0) {
        // Location.bulkCreate(locations);

        for (let i = 0; i < locations.length; i++){
            let province = locations[i]
            await Location.create({province});
        }
    }
}

module.exports = {precargaLocation};