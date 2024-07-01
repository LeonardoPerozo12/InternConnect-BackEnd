const { DataTypes } = require('sequelize');
const db = require('../db/config');
const Estudiante = require('./Estudiante'); // Importa el modelo Estudiante
const Pasantia = require('./Pasantia'); // Importa el modelo Pasantia

const Aplicacion = db.define('Aplicacion', {
  IDAplicacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IDEstudiante: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Estudiante,
      key: 'IDEstudiante'
    }
  },
  IDPasantia: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pasantia,
      key: 'IDPasantia'
    }
  },
  EstadoAplicacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  FechaAplicacion: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'aplicacion', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

// Define las asociaciones
Aplicacion.belongsTo(Estudiante, { foreignKey: 'IDEstudiante' });
Aplicacion.belongsTo(Pasantia, { foreignKey: 'IDPasantia' });

module.exports = Aplicacion;
