const { DataTypes } = require('sequelize');
const db = require('../db/config');
const Universidad = require('./Universidad'); // Importa el modelo Universidad
const Carrera = require('./Carrera'); // Importa el modelo Carrera
const TipoDocumento = require('./TipoDocumento'); // Importa el modelo TipoDocumento

const Estudiante = db.define('Estudiante', {
  IDEstudiante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  IDUniversidad: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Universidad,
      key: 'IDUniversidad'
    }
  },
  IDCarrera: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Carrera,
      key: 'IDCarrera'
    }
  },
  FotoEstudiante: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  FechaIngreso: {
    type: DataTypes.DATE,
    allowNull: true
  },
  CV: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Telefono: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  TipoDocumentoId: { // Llave foránea
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: TipoDocumento,
      key: 'TipoDocumento'
    }
  },
  Documento: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'estudiante', // Especifica el nombre correcto de la tabla
  timestamps: false // Desactiva los campos de timestamps
});

// Define las asociaciones
Estudiante.belongsTo(Universidad, { foreignKey: 'IDUniversidad' });
Estudiante.belongsTo(Carrera, { foreignKey: 'IDCarrera' });
Estudiante.belongsTo(TipoDocumento, { foreignKey: 'TipoDocumentoId' });

module.exports = Estudiante;
