# InternConnect-BackEnd

InternConnect es una aplicación web para la gestión de prácticas profesionales y pasantías, conectando estudiantes con empresas. Este repositorio contiene el backend de la aplicación, desarrollado con Node.js, Express y Sequelize para interactuar con una base de datos MySQL.

## Requisitos

- Node.js (v18.18.0 o superior)
- MySQL
- NPM (se incluye con Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/InternConnect-BackEnd.git
   cd InternConnect-BackEnd

2. Instalar las dependencias 
    ```bash
    npm install

3.Configura la base de datos:

4.Sincronizar la base de datos
 node src/db/sync-db.js

Modelos
  Aplicacion: Representa las aplicaciones a pasantías realizadas por los estudiantes.
  Beneficios: Detalla los beneficios ofrecidos por las pasantías.
  Beneficios_Pasantia: Relación muchos a muchos entre Beneficios y Pasantia.
  Carrera: Contiene las diferentes carreras ofrecidas por las universidades.
  Empresa: Contiene la información de las empresas registradas.
  Estudiante: Contiene la información de los estudiantes.
  Pasantia: Contiene la información de las pasantías ofrecidas por las empresas.
  TipoDocumento: Contiene los diferentes tipos de documentos que pueden tener los estudiantes.
  Universidad: Contiene la información de las universidades.
