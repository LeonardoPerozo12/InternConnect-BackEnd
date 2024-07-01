const db = require('../models/index-models');

async function syncDatabase() {
  try {
    await db.sequelize.sync(); // Sincroniza los modelos con la base de datos existente
    console.log('Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  } finally {
    // No necesitas cerrar la conexión aquí si estás usando el mismo objeto `sequelize` en toda la aplicación
  }
}

syncDatabase();
