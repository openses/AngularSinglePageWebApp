-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 09. Okt 2018 um 03:19
-- Server-Version: 5.6.41-84.1
-- PHP-Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `jacobc_openses`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `content`
--

CREATE TABLE `content` (
  `id` text COLLATE utf8_unicode_ci NOT NULL,
  `textarea` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `content`
--

INSERT INTO `content` (`id`, `textarea`) VALUES
('T1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T1 Digitale Ã–kosysteme</h1>\r\n\r\n<pre width=\"95%\" align=\"left\" style=\"background-color: #546E7A; color: #FFFFFF;\">          <code id=\"bar\" contenteditable=\"\" spellcheck=\"false\" class=\"language-css\" align=\"left\">\r\nhttp://localhost:4200/\r\n</code>\r\n</pre>\r\n<p align=\"center\">\r\n<button class=\"btn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">\r\nCopy to clipboard\r\n</button>\r\n</p>\r\n'),
('T1.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T1.1 Schul IT Umgebung</h1>'),
('T1.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T1.3 Big Data und KI</h1>\r\n'),
('T2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2 Identit&auml;tsmanagement</h1>\r\n'),
('T1.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T1.2 PersÃ¶nliche IT Umgebung</h1>\r\n'),
('T2.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.1 Anforderungen/Ziele</h1>'),
('T2.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.2 Protokolle/Plattformen</h1>\r\n'),
('T3_de', '<h1>T3 Lernmanagement</h1>'),
('T3.1_de', '<h1>T3.1 Szenarien</h1>'),
('T3.2_de', '<h1>T3.2 Softwareprodukte</h1>'),
('T3.3_de', '<h1>T3.3 ePortfolios</h1>'),
('T2.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.3 Verzeichnisdienste</h1>\r\n'),
('T2.4_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.4 Projekt FIDES</h1>\r\n\r\n'),
('1_de', '<p style=\"text-align:center\">Diese Website beinhaltet eine Sammlung von Theorie- und Praxisinformationen zu\r\n        <b><a target= \"_blank\" href=\"https://www.educa.ch/de/dossiers/eid/fides\" rel=\"noopener\">Digitalen Identitätsdiensten</a></b>\r\n        im Kontext von <b><a target= \"_blank\" href=\"https://trendreport.de/wiki/digitales-oekosystem\" rel=\"noopener\">Schul Ökosystemen</a></b>.</p>\r\n        <img src=\"https://openses.org/openses-content/images/overview_scool_ecosystems_v4.png\"  alt=\"Overview Open Scool Ecosystems / openses.org\" />\r\n        <p style=\"text-align:center; font: 0.9em/100% roboto;\">Beiträge und Übersetzungen sind willkommen.</p>\r\n        <br>\r\n        <br>\r\n        <br>'),
('2_de', '<h1>Open School Ecosystems Theorie</h1>\r\n          <p>Kapitelwahl im Men&uuml; des linken Seitenpanels</p>'),
('3_de', '<h1>Open School Ecosystems Praxis</h1>\r\n          <p>Kapitelwahl im Men&uuml; des linken Seitenpanels</p>');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`(6));
ALTER TABLE `content` ADD FULLTEXT KEY `textarea` (`textarea`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
