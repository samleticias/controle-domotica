import * as DeviceRepository from "../repositories/DeviceRepository.js";
import Room from "../models/Room.js";

// criar dispositivo em um cômodo
export const createDevice = async (data) => {
  if (!data.name || !data.id_room) {
    throw new Error("Campos 'name' e 'id_room' são obrigatórios");
  }

  const room = await Room.findByPk(data.id_room);
  if (!room) {
    throw new Error("Cômodo não encontrado");
  }

  return DeviceRepository.create(data);
};

// obter dispositivos por cômodo
export const getDevicesByRoom = async (id_room) => {
  const room = await Room.findByPk(id_room);
  if (!room) {
    throw new Error("Cômodo não encontrado");
  }

  // buscar dispositivos do cômodo
  return await DeviceRepository.findByRoom(id_room);
};