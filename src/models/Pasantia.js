const { DataTypes } = require('sequelize');
const db = require('../db/config');
const Empresa = require('./Empresa'); // Importa el modelo Empresa
const Beneficios = require('./Beneficios'); // Importa el modelo Beneficios

const Pasantia = db.define('Pasantia', {
  IDPasantia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Titulo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  FechaIngreso: {
    type: DataTypes.DATE,
    allowNull: true
  },
  FechaFin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  EsRemuneracion: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  DineroRemuneracion: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true
  },
  Duracion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  IDEmpresa: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Empresa,
      key: 'IDEmpresa'
    }
  },
  ModalidadPasa: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Requisitos: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Area: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Estado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  IDBeneficios: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Beneficios,
      key: 'IDBeneficios'
    }
  },
  Rol: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'pasantia', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

// Define las asociaciones
Pasantia.belongsTo(Empresa, { foreignKey: 'IDEmpresa' });
Pasantia.belongsTo(Beneficios, { foreignKey: 'IDBeneficios' });

module.exports = Pasantia;
