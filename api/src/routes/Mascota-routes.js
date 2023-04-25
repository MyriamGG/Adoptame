const express = require("express");
const routerPet = express.Router();

const {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
} = require("../controllers-Pet/Mascota-controller");

routerPet.get("/", getMascotas); //trae todas las mascotas
routerPet.get("/:id", mascotaById); //trae por id
routerPet.post("/", createMascota); //crea una mascota
routerPet.put("/:id", updateMascota); //actualiza una 
routerPet.delete("/:id", deleteMascota); //elimina una mascota
routerPet.put("/dashboard", updateMascota);

module.exports = routerPet;
