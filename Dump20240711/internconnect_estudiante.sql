-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: internconnect
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `IDEstudiante` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Correo` varchar(255) NOT NULL,
  `IDUniversidad` int DEFAULT NULL,
  `IDCarrera` int DEFAULT NULL,
  `FotoEstudiante` longblob,
  `FechaIngreso` date DEFAULT NULL,
  `CV` longblob,
  `Direccion` varchar(255) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `TipoDocumento` int DEFAULT NULL,
  `Documento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IDEstudiante`),
  KEY `IDUniversidad` (`IDUniversidad`),
  KEY `IDCarrera` (`IDCarrera`),
  KEY `TipoDocumento` (`TipoDocumento`),
  CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`IDUniversidad`) REFERENCES `universidad` (`IDUniversidad`),
  CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`IDCarrera`) REFERENCES `carrera` (`IDCarrera`),
  CONSTRAINT `estudiante_ibfk_3` FOREIGN KEY (`TipoDocumento`) REFERENCES `tipodocumento` (`TipoDocumento`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (8,'Leonardo Perozo','leonardo.perozzof@gmail.com',1,1,NULL,NULL,NULL,'-','829-830-3510',NULL,'40208801205'),(9,'Leonardo Perozo','leonardo.perozzof@gmail.com',1,1,NULL,NULL,NULL,'Calle el Cayao','829-830-3510',NULL,'40208801205'),(10,'Leonardo Perozo','leonardo.perozzof@gmail.com',2,2,NULL,NULL,NULL,'Calle el Cayao','829-830-3510',NULL,'40208801205'),(11,'Leonardo Perozo','leonardo.perozzof@gmail.com',2,2,NULL,NULL,NULL,'Calle el Cayao','829-830-3510',NULL,'40208801205'),(12,'Leonardo Perozo','leonardo.perozzof@gmail.com',2,2,NULL,NULL,NULL,'Calle el Cayao','829-830-3510',NULL,'40208801205');
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-11 21:13:55
