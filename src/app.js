const express = require('express');
const v1Router = require("./routes/index"); // Asegúrate de ajustar la ruta según tu estructura de archivos
const authRoutes = require('./routes/authRoutes'); // Asegúrate de ajustar la ruta según tu estructura de archivos

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON y URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use("/api/v1", v1Router); // Rutas principales de la API
app.use("/api/auth", authRoutes); // Rutas para la autenticación y registro

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
