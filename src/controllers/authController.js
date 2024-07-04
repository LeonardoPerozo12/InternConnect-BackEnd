const db = require('../models/index-models');
const Estudiante = db.Estudiante; // Asegúrate de importar correctamente el modelo Estudiante

async function registerStudent(req, res) {
    const { Nombre, Correo, IDUniversidad, IDCarrera, Direccion, Telefono, TipoDocumento, Documento } = req.body;

    console.log(req.body);
    
    const requiredFields = [Nombre, Correo, IDUniversidad, IDCarrera, Direccion, Telefono, TipoDocumento, Documento];
    console.log(requiredFields);
    if (requiredFields.some(field => !field)) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
        // Crear el estudiante en la base de datos
        const nuevoEstudiante = await Estudiante.create({
            Nombre,
            Correo,
            IDUniversidad,
            IDCarrera,
            Direccion,
            Telefono,
            TipoDocumento,
            Documento
        });

        res.status(200).json({ message: 'Estudiante registrado correctamente.', estudiante: nuevoEstudiante });
    } catch (error) {
        console.error('Error al registrar estudiante:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
}

const getStudents = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        console.log(estudiantes); // Imprime los estudiantes en la consola del servidor
        res.status(200).json(estudiantes);
    } catch (error) {
        console.error('Error fetching students:', error); // Imprime el error en la consola del servidor
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registerStudent,
    getStudents
};
