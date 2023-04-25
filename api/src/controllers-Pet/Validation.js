const {Pet} = require("../db");
const { Op } = require("sequelize");
const Validation = async (body) => {


    //sex
        let {name, animal,sex,  breed, height, weight, age, color, image, identified} = body;
    
        if (!name) return "Coloque un nombre";
        if (!animal) return "Coloque un tipo de animal"; 
        if (!sex) return "Coloque un sexo"; 
        if (!breed) return "Coloque una raza";
        if (!height) return "Coloque la altura de la mascota";
        if (!weight) return "Coloque el peso de la mascota";
        if (!age) return "Coloque la edad de la mascota";
        if (!color) return "Coloque el color de pelo de la mascota";
        
        if (image && !(image.match( /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null )) {
            return "El link provisto no es una imagen";
        } 

        if (name === " ") return "Coloque algun nombre a la mascota";

        if (name) {
            const petName = await Pet.findAll({
                where:{
                  name: {[Op.iLike]:`%${name}%`}
                }})
            if (petName.length) return "Nombre ya existe";
        }
    
        if (!image) image = " ";

 }

module.exports = Validation;