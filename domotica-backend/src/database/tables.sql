-- Enum para ligar/desligar
CREATE TYPE ActionType AS ENUM (
    'turn_on',
    'turn_off' 
);

-- Casa
CREATE TABLE House (
    id_house SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    address VARCHAR(255) 
);

-- Ccômodo
CREATE TABLE Room (
    id_room SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    id_house INT NOT NULL, -- id da casa à qual o cômodo pertence (chave estrangeira)
    FOREIGN KEY (id_house) REFERENCES House(id_house)
);

-- Dispositivo
CREATE TABLE Device (
    id_device SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    type VARCHAR(255), -- tipo do dispositivo
    state BOOLEAN, -- estado do dispositivo (ligado/desligado)
    id_room INT NOT NULL, -- id do cômodo ao qual o dispositivo pertence (chave estrangeira)
    FOREIGN KEY (id_room) REFERENCES Room(id_room)
);

-- Cena
CREATE TABLE Scene (
    id_scene SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    is_active BOOLEAN 
);

-- Cena_Dispositivo
CREATE TABLE Scene_Device (
    id_scene_device SERIAL PRIMARY KEY, -- id da associação cena-dispositivo (chave primária)
    id_scene INT NOT NULL, -- id da cena (chave estrangeira)
    id_device INT NOT NULL, -- id do dispositivo (chave estrangeira)
    "order" INT, -- ordem de execução da ação na cena
    "interval" INT, -- intervalo de tempo para a ação
    action ActionType, -- tipo de ação a ser executada (ligar/desligar)
    FOREIGN KEY (id_scene) REFERENCES Scene(id_scene),
    FOREIGN KEY (id_device) REFERENCES Device(id_device)
);