const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('internconnect', 'root', '12042004', {
  host: 'localhost',
  dialect: 'mysql',
});

async function Connection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

Connection(); // Llama a la función para establecer la conexión al iniciar

module.exports = sequelize;
