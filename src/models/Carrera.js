const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Carrera = db.define('Carrera', {
  IDCarrera: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'carrera', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = Carrera;
