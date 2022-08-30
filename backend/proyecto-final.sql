-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-08-2022 a las 13:09:03
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(8, 'Educacion', '   La Facultad de Lenguas busca dos mil instructores para dictar cursos de inglés “online”   ', 'La iniciativa es impulsada por el Ministerio de Educación de la Nación. La convocatoria está abierta a profesores y a estudiantes de inglés hasta fines de agosto. Cuáles son los requisitos para postularse.   ', 'wnuyhk3de1slavfjuz9y'),
(9, 'Coronavirus', 'Covid-19 en Mendoza: el uso del barbijo será optativo en la escuela primaria y en el nivel inicial', 'Lo informó la Dirección General de Escuelas de esa provincia y rige a partir del próximo lunes 14 de marzo. En el colegio secundario rige el uso de forma obligatoria.', 'zbideldl8zxshipop2px'),
(10, 'Sociedad', ' Alumnos resilientes: solo el 14% de los chicos pobres logra buenos resultados y lo asocian a “factores protectores” ', 'Son los estudiantes que terminan la secundaria con los aprendizajes esperados en lengua y matemática. Hay distintos rasgos que ayudan a que se destaquen ', 'ugagl87sw8rk5akoykwl'),
(6, 'UNC', 'Cursos de oficios gratuitos que ofrece la UNC en 2020: cuáles son y cómo anotarte', 'La Universidad Nacional de Córdoba hizo el lanzamiento para comenzar las inscripciones. Todos los detalles en esta nota.', 'vizpaw8tqtizyipnsgpj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'mati', '81dc9bdb52d04dc20036dbd8313ed055'),
(7, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
