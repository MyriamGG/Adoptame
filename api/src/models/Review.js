const { DataTypes } = require("sequelize");
// require("express-validator");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      puntuaction:{
        type: DataTypes.ENUM("1","2","3","4","5"),
      },
      Comment: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                arg: [0, 255],
                msg: "El numero de caracteres del comentario no puede tener más de 255 caracteres",
              },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
