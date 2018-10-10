-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 09. Okt 2018 um 22:11
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
('T4.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T4.1 Personen</h1>'),
('T4.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T4.2 Infrastruktur</h1>'),
('T5_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T5 Datenmanagement</h1>'),
('T5.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T5.1 Standards</h1>'),
('T5.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T5.2 eCH</h1>'),
('T5.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T5.3 SBBK</h1>'),
('T5.4_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T5.4 CEDS</h1>'),
('T6_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T6 Microservices</h1>'),
('T6.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T6.1 MVC Architektur</h1>'),
('T6.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T6.2 Autonom</h1>'),
('T6.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T6.3 Agil</h1>'),
('T6.4_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T6.4 Fallstudie Uber</h1>'),
('T2.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.2 Protokolle/Plattformen</h1>\r\n'),
('T3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T3 Lernmanagement</h1>'),
('T3.1_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T3.1 Lernplattformen</h1>'),
('T3.2_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T3.2 Pers&ouml;nliche Lernumgebung</h1>\r\n'),
('T3.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T3.3 ePortfolios</h1>'),
('T4_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p><h1>T4 Ressourcenmanagement</h1>'),
('T2.3_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.3 Verzeichnisdienste</h1>\r\n'),
('T2.4_de', '<p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p>\r\n<h1>T2.4 Projekt FIDES</h1>\r\n\r\n'),
('1_de', '<p style=\"text-align:center\">Diese Website beinhaltet eine Sammlung von Theorie- und Praxisinformationen zu\r\n        <b><a target= \"_blank\" href=\"https://www.educa.ch/de/dossiers/eid/fides\" rel=\"noopener\">Digitalen Identitätsdiensten</a></b>\r\n        im Kontext von <b><a target= \"_blank\" href=\"https://trendreport.de/wiki/digitales-oekosystem\" rel=\"noopener\">Schul Ökosystemen</a></b>.</p>\r\n        <img src=\"https://openses.org/openses-content/images/overview_scool_ecosystems_v4.png\"  alt=\"Overview Open Scool Ecosystems / openses.org\" />\r\n        <p style=\"text-align:center; font: 0.9em/100% roboto;\">Beiträge und Übersetzungen sind willkommen.</p>\r\n        <br>\r\n        <br>\r\n        <br>'),
('2_de', '<h1>Open School Ecosystems Theorie</h1>\r\n          <p>Kapitelwahl im Men&uuml; des linken Seitenpanels</p>'),
('3_de', '<h1>Open School Ecosystems Praxis</h1>\r\n          <p>Kapitelwahl im Men&uuml; des linken Seitenpanels</p>'),
('P1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P1 Programmiersprachen</h1>'),
('P1.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P1.1 JavaScript</h1>'),
('P1.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P1.2 TypeScript</h1>'),
('P1.3_de', ' <p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P1.3 Python</h1>'),
('P2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2 Programmiertools</h1>'),
('P2.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2.1 Visual Studio Code</h1>'),
('P2.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2.2 CodePen</h1>'),
('P2.3_de', ' <p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2.3 Stackblitz</h1>\r\n<p>https://blog.angular.io/run-angular-cli-repos-directly-in-your-browser-41332fd80901</p>\r\n<p>https://github.com/buerojacob/openses</p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>\r\n<p></p>'),
('P2.4_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2.4 Git</h1>'),
('P2.5_de', ' <p align=\"center\" style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P2.5 Docker</h1>\r\n<br><p>\r\ndocker build --rm -f \"Dockerfile\" -t buerojacob.azurecr.io/openses:latest .</p><p>\r\ndocker run --rm -it -p 80:80/tcp buerojacob.azurecr.io/openses:latest</p>\r\n<p>\r\nhttps://portal.azure.com/</p>\r\nim container buerojacob im repository openses das tag latest lÃ¶schen<br>\r\naus visualstudio in vm ubuntu docker image nach azure hochladen -&gt; docker push buerojacob.azurecr.io/openses:latest<br>\r\nin azure die containerinstanz opensescontainerv3 lÃ¶schen<br>\r\nin azure shell mit dem unten stehenden befehl die containerinstanz opensescontainerv3 mit dem neuen docker image erstellen<br>\r\nclaude@Azure az container create --resource-group openses --name opensescontainerv3 --image buerojacob.azurecr.io/openses:latest --ip-address public --ports 80 443 --dns-name-label openses --cpu 1 --memory 1<br>'),
('P3_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3 MEAN Stack</h1>'),
('P3.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.1 node.js / npm</h1>'),
('P3.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.2 express.js</h1>'),
('P3.3_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.3 passport.js</h1>'),
('P3.4_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.4 MongoDB</h1>'),
('P3.5_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.5 mongoose.js</h1>'),
('P3.6_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.6 Angular CLI</h1>'),
('P3.7_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.7 Angular  Material</h1>'),
('P3.8_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.8 Handsontable CE</h1>'),
('P3.9_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P3.9 NativeScript</h1>'),
('P4_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P4 LAMP Stack</h1>'),
('P4.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P4.1 jQuery</h1>'),
('P4.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P4.2 PHP</h1>'),
('P4.3_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P4.3 MySQL</h1>'),
('P5_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P5 APIs/Webservices</h1>'),
('P5.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P5.1 Moodle</h1>'),
('P5.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P5.2 mahara</h1>'),
('P5.3_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P5.3 openses.org</h1>'),
('P6_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P6 Hosting</h1>'),
('P6.1_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P6.1 Azure</h1>'),
('P6.2_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P6.2 Amazon Web Services</h1>'),
('P6.3_de', ' <p align=\"center\"style=\"background-color: #B00020; color: #FFFFFF;\">This content is still under construction, please visit us later!</p> <h1>P6.3 On Premises</h1>');

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
