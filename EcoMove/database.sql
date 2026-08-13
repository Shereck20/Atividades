CREATE DATABASE coffee_house;

-- Conecte no banco coffee_house antes de rodar o restante

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE atividade' (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    tipo TEXT NOT NULL,
    distancia_metros NUMERIC NOT NULL,
    duracao_minutos 
    co2_kg TEXT NOT NULL,
    data_iso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (nome, categoria, preco, tempo_preparo, emoji) VALUES
('Cappuccino', 'cafe', 12.00, 5, '☕'),
('Café Expresso', 'cafe', 8.00, 3, '☕'),
('Mocha', 'cafe', 15.00, 6, '☕'),
('Croissant', 'lanches', 14.00, 4, '🥐'),
('Pão de Queijo', 'lanches', 9.00, 3, '🥐'),
('Sanduíche Natural', 'lanches', 18.00, 7, '🥐'),
('Bolo de Chocolate', 'sobremesas', 10.00, 3, '🍰'),
('Cheesecake', 'sobremesas', 16.00, 4, '🍰'),
('Brownie', 'sobremesas', 11.00, 3, '🍰');

INSERT INTO pedidos (produto_id, quantidade) VALUES
(1, 1),
(4, 1),
(7, 1);

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, senha)
VALUES ('admin', '123456')
ON CONFLICT (nome) DO NOTHING;