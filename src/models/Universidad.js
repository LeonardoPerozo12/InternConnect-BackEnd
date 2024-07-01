const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Universidad = db.define('Universidad', {
  IDUniversidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'universidad', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = Universidad;