const { Review, Pet } = require("../db.js");
const { Op } = require("sequelize");

//CRUD API MASCOTAS

const createReview = async (req, res) => {
  try {
    let {
        title,
        puntuaction,
        Comment,
        pets

    } = req.body;

    const newReview = await Review.create({
        title,
        puntuaction,
        Comment
    });
    await newReview.addPet(pets);
    newReview
      ? res.status(200).send("Review created successfully 👌")
      : res.status(404).json("Review not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getReview = async (req, res) => {

  try {  

     const review = await Review.findAll(
      {
      include: [
        {
          model: Pet,
          attributes: ["id","name","animal"],
          through: { attributes: [] },
        }
      ],
    }
    );
    res.status(200).send(review);

  } catch (error) {
    console.log("me tiro un error de autenticacion")
    res.status(400).send({ message: error.message});
  }
};

module.exports = {
    createReview,
    getReview,
   };