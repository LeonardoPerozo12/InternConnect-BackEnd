const { DataTypes } = require('sequelize');
const db = require('../db/config');

const TipoDocumento = db.define('TipoDocumento', {
  TipoDocumento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NombreTipoDocumento: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tipodocumento', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = TipoDocumento;