const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('UserLogin', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    name: {
      type: DataTypes.STRING
    },
    passwordHash: {
      type: DataTypes.STRING
    }
    },   
    {
        timestamps: false,
    })
}