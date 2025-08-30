import * as HouseRepository from "../repositories/HouseRepository.js";

export const getAllHouses = () => {
  return HouseRepository.findAll();
};

export const getHouseById = (id) => {
  return HouseRepository.findById(id);
};

export const createHouse = (data) => {
  if (!data.name || !data.address) {
    throw new Error("Campos de nome e endereço são obrigatórios");
  }
  return HouseRepository.create(data);
};

export const updateHouse = (id, data) => {
  return HouseRepository.update(id, data);
};

export const deleteHouse = (id) => {
  return HouseRepository.remove(id);
};