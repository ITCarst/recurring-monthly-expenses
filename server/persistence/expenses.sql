CREATE DATABASE IF NOT EXISTS `recurring_expenses`;
USE `recurring_expenses`;

CREATE TABLE IF NOT EXISTS `expenses` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `ammount` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `occuring` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
