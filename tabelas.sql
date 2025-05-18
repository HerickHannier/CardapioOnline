CREATE DATABASE adm;

USE adm;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);
INSERT INTO usuarios (email, senha) VALUES ('ADM', '123');

CREATE TABLE cardapio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    preco VARCHAR(20),
    descricao TEXT,
    imagem VARCHAR(255),
    categoria VARCHAR(50)
);

DELETE FROM `cardapio` WHERE `id`=4
