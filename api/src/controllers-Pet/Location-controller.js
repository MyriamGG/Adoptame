const { Op } = require("sequelize");
const {Location, Pet,User} = require("../db.js");

//CRUD API MASCOTAS

const createLocation = async (req, res) => {
  try {
    let {province} = req.body;

const location = await Location.findAll();
if (province) {
    const locationName = location.filter( (l) => l.province.toLowerCase().includes(province.toLowerCase()));
    if (locationName.length) throw new Error ("This city already exist!");
}
    const newLocation = await Location.create({province});
 
    newLocation
      ? res.status(200).send("Location created successfully 👌")
      : res.status(404).json("Location not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getLocation = async (req, res) => {
  try {
    const { province } = req.query; //opcion por name
    const location = await Location.findAll( {include: [
    
      {
        model: Pet,
        attributes: ["id"],
        through:{attributes:[]}
      },
      {
        model: User,
        attributes: ["id"],
        through:{attributes:[]}
      }
    ]});

    if (province) {
      let locQ = await Location.findAll({
        where:{
          province: {[Op.iLike]:`%${province}%`}
        ,},include: [
          {
            model: Pet,
            attributes: ["id"],
            through: { attributes: [] },
          }]})
        
      res.status(200).send(locQ)
    }else{
      res.status(200).send(location)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createLocation,
  getLocation
};