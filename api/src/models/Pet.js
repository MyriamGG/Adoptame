const { DataTypes } = require("sequelize");
// require("express-validator");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "El nombre no puede estar vacio",
          },
        },
      },
      animal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El tipo de animal no puede estar vacio",
          },
          isAlpha: {
            args: true,
            msg: "El tipo de animal solo puede contener letras",
          },
          len: {
            arg: [3, 20],
            msg: "El numero de caracteres del tipo de animal debe tener entre 3 y 20 caracteres",
          },
        },
      },
      sex:{
        type: DataTypes.ENUM("Male","Female"),
      },

      breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "La raza no puede estar vacia",
          },
         },
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            args: true,
            msg: "La altura solo puede contener numeros y una coma decimal",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isFloat: {
            args: true,
            msg: "El peso debe ser un numero",
          },
        },
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "color no puede estar vacio",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      timewait: {
        type: DataTypes.DATEONLY,
      },
      adopted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      disabled:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
