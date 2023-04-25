const { Op } = require("sequelize");
const {Diseases,Pet} = require("../db.js");


//CRUD API MASCOTAS

const createDiseases = async (req, res) => {
  try {
    let {name, severity} = req.body;

// : parseInt(height) || 0,: parseInt(weight) || 0,
    const newDiseases = await Diseases.create({name, severity});
 
    newDiseases
      ? res.status(200).send("Disease created successfully 👌")
      : res.status(404).json("Disease not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getDiseases = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const diseases = await Diseases.findAll( {include: [
    
      {
        model: Pet,
        attributes: ["id"],
        through:{attributes:[]}
      },
    ]});

    if (name) {
      let oneDisease = await Diseases.findAll({
        where:{
          name: {[Op.iLike]:`%${name}%`}
        },include: [
          {
            model: Pet,
            attributes: ["id"],
            through: { attributes: [] },
          }]})
        res.status(200).send(oneDisease)
    }else{
      res.status(200).send(diseases)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createDiseases,
  getDiseases
};