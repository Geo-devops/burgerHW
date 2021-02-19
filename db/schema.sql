-- create database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

-- create burgers table
CREATE TABLE burgers (
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(255),
    devoured TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);