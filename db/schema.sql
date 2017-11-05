-- drops database if exists
DROP DATABASE IF EXISTS burgers_db;
-- create database
CREATE DATABASE burgers_db;

USE burgers_db;
-- create table
CREATE TABLE burgers(

	`id` INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
	`burger_name` TEXT NOT NULL,
	`devoured` BOOLEAN NOT NULL,
	`date` TIMESTAMP NOT NULL 
);

