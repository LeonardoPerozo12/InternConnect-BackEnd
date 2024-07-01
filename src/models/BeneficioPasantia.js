const { DataTypes } = require('sequelize');
const db = require('../db/config');

const BeneficiosPasantia = db.define('BeneficiosPasantia', {
  IDBeneficiosPasantia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IDBeneficios: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  IDPasantia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'beneficio_pasantia', // Nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = BeneficiosPasantia;
