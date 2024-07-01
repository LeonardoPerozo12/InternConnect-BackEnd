const { DataTypes } = require('sequelize');
const db = require('../db/config');
const Beneficios = require('./Beneficios'); // Importa el modelo Beneficios
const Pasantia = require('./Pasantia'); // Importa el modelo Pasantia

const BeneficioPasantia = db.define('Beneficio_Pasantia', {
  IDBeneficios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Beneficios,
      key: 'IDBeneficios'
    }
  },
  IDPasantia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Pasantia,
      key: 'IDPasantia'
    }
  }
}, {
  tableName: 'beneficio_pasantia', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

module.exports = BeneficioPasantia;
