const express = require('express');
const router = express.Router();
const Carrera = require('/Users/leona/InternConnect-BackEnd/src/models/Carrera.js'); // Asegúrate de que esta ruta sea correcta

router.route('/')
  .get(async (req, res) => {
    try {
      const carrera = await Carrera.findAll(); 
      res.json(carrera);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las carreras' });
    }
  });

module.exports = router;
