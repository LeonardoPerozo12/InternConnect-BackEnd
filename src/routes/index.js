const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes'); // Importa las rutas de autenticación desde authRoutes.js

// Rutas de autenticación
router.use('/auth', authRoutes);

module.exports = router;
