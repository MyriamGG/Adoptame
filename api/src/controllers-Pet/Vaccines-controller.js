const { Op } = require("sequelize");
const {Vaccines,Pet} = require("../db.js");

//CRUD API MASCOTAS

const createVaccines = async (req, res) => {
  try {
    let {name} = req.body;

// : parseInt(height) || 0,: parseInt(weight) || 0,
    const newVaccine = await Vaccines.create({name});
 
    newVaccine
      ? res.status(200).send("Vaccine created successfully 👌")
      : res.status(404).json("Vaccine not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getVaccines = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const vaccine = await Vaccines.findAll({include: [
    
      {
        model: Pet,
        attributes: ["id"],
        through:{attributes:[]}
      },
    ]});

    if (name) {
      const oneVaccine = await Vaccines.findAll({
        where:{
          name: {[Op.iLike]:`%${name}%`}
        },include: [
          {
            model: Pet,
            attributes: ["id"],
            through: { attributes: [] },
          }]})
        res.status(200).send(oneVaccine)
    }else{
      res.status(200).send(vaccine)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createVaccines,
  getVaccines
};

//CRUD API MASCOTAS
