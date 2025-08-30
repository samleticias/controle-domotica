import * as RoomRepository from "../repositories/RoomRepository.js";
import House from "../models/House.js"

export const getAllRooms = () => {
  return RoomRepository.findAll();
};

export const getRoomById = (id) => {
  return RoomRepository.findById(id);
};

export const createRoom = async (data) => {
  if (!data.name || !data.id_house) {
    throw new Error("Campos de nome e id da casa são obrigatórios");
  }

  const house = await House.findByPk(data.id_house);
  if (!house) {
    throw new Error("Casa não encontrada");
  }

  return RoomRepository.create(data);
};

export const updateRoom = (id, data) => {
  return RoomRepository.update(id, data);
};

export const deleteRoom = (id) => {
  return RoomRepository.remove(id);
};