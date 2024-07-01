const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Beneficios = db.define('Beneficios', {
  IDBeneficios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TipoBeneficio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'beneficios', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = Beneficios;
