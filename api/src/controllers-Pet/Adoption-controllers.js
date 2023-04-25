const {User,Pet, Location,Vaccines, Diseases} = require("./../db.js")
const { Op } = require("sequelize");

const adoptPet = async(req,res) =>{
    let {idP, idU} = req.body
    const pets = await Pet.findByPk(idP,)
    const users = await User.findByPk(idU)
    pets.setUser(idU)
    users.setPets(idP)
    

    res.send(pets)
}

module.exports = {
    adoptPet
}