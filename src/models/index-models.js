const dbConfig = require('../db/config');
const sequelize = require('../db/config')

// Importa todos los modelos aquí
const Aplicacion = require('./Aplicacion');
const BeneficiosPasantia = require('./BeneficioPasantia');
const Beneficios = require('./Beneficios');
const Carrera = require('./Carrera');
const Empresa = require('./Empresa');
const Estudiante = require('./Estudiante');
const Pasantia = require('./Pasantia');
const TipoDocumento = require('./TipoDocumento');
const Universidad = require('./Universidad');

// Define las asociaciones entre modelos si es necesario
// Por ejemplo:
// Estudiante.belongsTo(Universidad, { foreignKey: 'IDUniversidad' });
// Estudiante.belongsTo(Carrera, { foreignKey: 'IDCarrera' });
// ...

// Exporta todos los modelos y sequelize
module.exports = {
  sequelize,
  Aplicacion,
  BeneficiosPasantia,
  Beneficios,
  Carrera,
  Empresa,
  Estudiante,
  Pasantia,
  TipoDocumento,
  Universidad,
};