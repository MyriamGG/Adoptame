const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      fullname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "El nombre no puede estar vacio"
            },
             len: {
              args: [3, 30],
              msg: "El numero de caracteres del nombre debe tener entre 3 y 30 caracteres",
            }
          }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El domicilio no puede estar vacio"
          },
            len: {
            args: [3, 30],
            msg: "El numero de caracteres del nombre debe tener entre 3 y 30 caracteres",
          }
        }
  
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      disabled:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
      },
      isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
      }


    },   
    {
        timestamps: false,
    })
}
