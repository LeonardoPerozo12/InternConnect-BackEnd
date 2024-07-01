const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Empresa = db.define('Empresa', {
  IDEmpresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CorreoRRHH: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  RNC: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Verificacion: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  LogoEmpresa: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  FechaIngreso: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Contacto: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'empresa', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = Empresa;
