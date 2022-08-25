-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-08-2022 a las 10:16:59
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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'pinchiaaaaaaaaaaaaaaaaa', ' Jeimi Jhojana Venegas David y Oscar Mauricio Delgado son profesores del Colegio San José de las Vegas, de Medellín, y fueron distinguidos como los hacedores del mejor proyecto Ed Tech del año en el V Congreso Tesol de Colombia ', 'Venegas y Delgado lograron convertir su clase en un puente entre culturas. Así, los niños mantuvieron contacto con científicos, docentes y también con otros niños de su misma edad, provenientes de lugares tan distantes como Egipto, Taiwán, Estados Unidos, Países Bajos. “Desde el 2019, nos embarcamos en la aventura de llevar a nuestros estudiantes al mundo”, dice Delgado. Y sigue: “Queremos que nuestros estudiantes sean ciudadanos digitales”. ¿Cómo son las reacciones de los chicos? “Son niños y niñas con el corazón latiendo a mil”, dice Venegas. Y cuenta que algunos terminaban llorando de emoción por haber hablado con una alguien de la India o de Francia.\r\n\r\nEn el marco del V Congreso Tesol, que desde el miércoles se desarrolla en la sede de la Universidad de La Sabana, en Chía, Venegas y Delgado fueron distinguidos con el premio al mejor proyecto de tecnología educativa del año. “El proyecto”, decía el jurado, “representa la aplicación práctica de una metodología actual de aprendizaje o enseñanza de idiomas, que utiliza la tecnología para romper fronteras e integrar la competencia global”.\r\n\r\nAcompañados por los directivos Clemencia Mejía y Oscar Muñetón, Venegas y Delgado recibieron el premio y luego visitaron el living que Ticmas armó en el congreso. ', NULL),
(2, 'Maestros inspiradores: la emocionante clase de inglés que fue elegida como el mejor proyecto educativo del año', 'Jeimi Jhojana Venegas David y Oscar Mauricio Delgado son profesores del Colegio San José de las Vegas, de Medellín, y fueron distinguidos como los hacedores del mejor proyecto Ed Tech del año en el V Congreso Tesol de Colombia', 'Venegas y Delgado lograron convertir su clase en un puente entre culturas. Así, los niños mantuvieron contacto con científicos, docentes y también con otros niños de su misma edad, provenientes de lugares tan distantes como Egipto, Taiwán, Estados Unidos, Países Bajos. “Desde el 2019, nos embarcamos en la aventura de llevar a nuestros estudiantes al mundo”, dice Delgado. Y sigue: “Queremos que nuestros estudiantes sean ciudadanos digitales”. ¿Cómo son las reacciones de los chicos? “Son niños y niñas con el corazón latiendo a mil”, dice Venegas. Y cuenta que algunos terminaban llorando de emoción por haber hablado con una alguien de la India o de Francia.\r\n\r\nEn el marco del V Congreso Tesol, que desde el miércoles se desarrolla en la sede de la Universidad de La Sabana, en Chía, Venegas y Delgado fueron distinguidos con el premio al mejor proyecto de tecnología educativa del año. “El proyecto”, decía el jurado, “representa la aplicación práctica de una metodología actual de aprendizaje o enseñanza de idiomas, que utiliza la tecnología para romper fronteras e integrar la competencia global”.\r\n\r\nAcompañados por los directivos Clemencia Mejía y Oscar Muñetón, Venegas y Delgado recibieron el premio y luego visitaron el living que Ticmas armó en el congreso.', NULL),
(3, 'Se derrumbó un techo de una escuela de La Plata mientras los alumnos estaban en clase', 'Cayó parte de la mampostería en un aula debido a una filtración de agua. No hubo heridos', 'El techo de una escuela de La Plata se derrumbó ayer mientras los alumnos estaban en clase. Se trata de la secundaria N°2 “La Legión”, ubicada en la esquina de 12 y 60. Pese a la tensión vivida, ningún estudiante ni profesor resultó herido.\r\n\r\nFuentes de la Dirección General de Cultura y Educación bonaerense (DGCyE) confirmaron que no hubo heridos más allá de que la caída del fragmento de techo ocurrió mientras los chicos estaban en el aula. Según la institución, la rotura se produjo a raíz de una filtración de agua que habían denunciado tiempo atrás.', NULL),
(4, 'Se derrumbó un techo de una escuela de La Plata mientras los alumnos estaban en clase', 'Cayó parte de la mampostería en un aula debido a una filtración de agua. No hubo heridos', 'El techo de una escuela de La Plata se derrumbó ayer mientras los alumnos estaban en clase. Se trata de la secundaria N°2 “La Legión”, ubicada en la esquina de 12 y 60. Pese a la tensión vivida, ningún estudiante ni profesor resultó herido.\r\n\r\nFuentes de la Dirección General de Cultura y Educación bonaerense (DGCyE) confirmaron que no hubo heridos más allá de que la caída del fragmento de techo ocurrió mientras los chicos estaban en el aula. Según la institución, la rotura se produjo a raíz de una filtración de agua que habían denunciado tiempo atrás.', NULL),
(6, 'ACA HAY UNA IMAGEN', 'IMG', 'IMGGGGGGGGGG', 'uvulkn2e9nsucjbyzmmf');

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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'mati', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'fran', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
