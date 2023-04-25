const express = require("express");
const router = express.Router();
const {
  createUsuario,
  getUsuario,
  usuarioById,
  deleteUsuario,
  updateUsuario,
} = require("../controllers-Pet/Usuario-controller");

router.get("/", getUsuario); //trae todos los usuarios
router.get("/:id", usuarioById); //trae por id
router.post("/", createUsuario); //crea una usuario
router.put("/:id", updateUsuario); //actualiza un usuario
router.delete("/:id", deleteUsuario); //elimina un usuario

module.exports = router;