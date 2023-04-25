const { User, Pet, Location } = require("../db.js");
const { Op } = require("sequelize");
//const Validation = require("./Validation");

//CRUD API MASCOTAS

const createUsuario = async (req, res) => {
  try {
    let { fullname, address, phone, email, location } = req.body;

    //const msg = await Validation(req.body);
    //if (msg) throw new Error(msg);

    const newUsuario = await User.create({
      fullname,
      address,
      phone,
      email,
    });
    // await newUsuario.addPet(pet);
    await newUsuario.addLocation(location);
    newUsuario
      ? res.status(200).send("Usuario created successfully 👌")
      : res.status(404).json("Usuario not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getUsuario = async (req, res) => {
  try {
    const { name } = req.query;

    const users = await User.findAll({
      include: [
        { model: Pet, attributes: ["id", "name"]},
        {
          model: Location,
          attributes: ["province"],
          through: { attributes: [] },
        },
      ],
    });

    if (name) {
      const queryUser = await User.findAll({
        where: {
          fullname: { [Op.iLike]: `%${name}%` },
        },
        include: [
          {
            model: Pet,
            attributes: ["id", "name"],
          },
          {
            model: Location,
            attributes: ["id", "province"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send(queryUser);
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const usuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const userById = await User.findByPk(id, {
      include: [
        {
          model: Pet,
          attributes: ["id", "name"],
        },
        {
          model: Location,
          attributes: ["id", "province"],
          through: { attributes: [] },
        },
      ],
    });

    userById
      ? res.json(userById)
      : res.status(400).json("There are no users with that id in the db");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const userById = await User.findByPk(id);

    if (userById) {
      userById.disabled = true;
      await userById.save();
      res.json("El usuario fue borrado con exito");
    } else {
      res.status(400).json("There are no users with that id in the db");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { fullname, address, phone, email, isAdmin } = req.body;

  try {
    if (!id) {
      res.status(400).json("No se encuentra ID");
    } else {
      const userById = await User.findByPk(id);
      if (fullname) userById.fullname = fullname;
      if (address) userById.address = address;
      if (phone) userById.phone = phone;
      if (email) userById.email = email;
      if (isAdmin) userById.isAdmin = isAdmin
      await userById.save();
      console.log(userById);
      res.json("El cambio fue realizado con exito");
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createUsuario,
  getUsuario,
  usuarioById,
  deleteUsuario,
  updateUsuario,
};
