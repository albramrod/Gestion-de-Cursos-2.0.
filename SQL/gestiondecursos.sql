-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2017 a las 18:21:08
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `gestiondecursos`
--
CREATE DATABASE `gestiondecursos` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gestiondecursos`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE IF NOT EXISTS `asignaturas` (
  `id` varchar(4) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `dni_profesor` varchar(9) DEFAULT NULL,
  `id_curso` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`id`, `nombre`, `dni_profesor`, `id_curso`) VALUES
('111A', 'Cliente', '12345678A', '111A'),
('222B', 'Servidor', '12345678B', '111A'),
('444C', 'Despliegue', '12345678D', '111A'),
('555D', 'Libre configuracion', NULL, '111A'),
('444E', 'Interfaces', '12345678C', '111A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE IF NOT EXISTS `calificaciones` (
  `dni_alumno` varchar(9) NOT NULL,
  `id_asignatura` varchar(4) NOT NULL,
  `nota` float NOT NULL,
  PRIMARY KEY (`dni_alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`dni_alumno`, `id_asignatura`, `nota`) VALUES
('98765432A', '111A', 10),
('98765432B', '111A', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE IF NOT EXISTS `cursos` (
  `id` varchar(4) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `localizacion` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `fecha_inicio`, `fecha_fin`, `descripcion`, `precio`, `localizacion`) VALUES
('111A', 'Desarrollo de Aplicaciones Web', '2015-09-15', '2017-03-16', 'Se enseÃ±a programacion en diferentes lenguajes or', 0, 'I.E.S Hermanos Macha');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE IF NOT EXISTS `grupos` (
  `dni_alumno` varchar(9) NOT NULL,
  `id_curso` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`dni_alumno`, `id_curso`) VALUES
('98765432A', '111A'),
('98765432B', '111A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE IF NOT EXISTS `personas` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` int(9) NOT NULL,
  `edad` int(3) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `tipo` enum('Alumno','Profesor') DEFAULT 'Alumno',
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`dni`, `nombre`, `apellidos`, `fecha_nacimiento`, `telefono`, `edad`, `direccion`, `tipo`) VALUES
('12345678A', 'Carlos', 'Rodriguez', '1900-05-05', 123456789, 0, 'Calle Carlos', 'Profesor'),
('12345678B', 'Juan', 'Vilches', '1900-05-05', 123456789, 0, 'Calle Juan', 'Profesor'),
('12345678C', 'David', 'De Vega', '1900-05-05', 123456789, 0, 'Calle David', 'Profesor'),
('12345678D', 'Emilio', 'Vilchez', '1900-05-05', 123456789, 0, 'Calle Emilio', 'Profesor'),
('98765432A', 'Alberto', 'Ramos', '1995-08-09', 123457689, 21, 'Calle Alberto', 'Alumno'),
('98765432B', 'JuanJose', 'Fernandez', '1995-08-09', 123457689, 21, 'Calle Juan Jose', 'Alumno');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
