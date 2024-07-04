const express = require('express');
const router = express.Router();
const {registerStudent, getStudents} = require('../controllers/authController');

// Ruta para el registro de estudiantes

//post estduiante
router.post('/register', registerStudent);

//get estudiantes
router.get('/students', getStudents);

module.exports = router;
