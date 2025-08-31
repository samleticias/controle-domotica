import * as DeviceRepository from "../repositories/DeviceRepository.js";
import Room from "../models/Room.js";

// listar todos os dispositivos cadastrados
export const getAllDevices = async () => {
  return await DeviceRepository.findAll();
};

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

// obter dispositivo por id
export const getDeviceById = async (id_device) => {
  const device = await DeviceRepository.findById(id_device);
  if (!device) throw new Error("Dispositivo não encontrado");
  return device;
};

// listar dispositivos por cômodo
export const getDevicesByRoom = async (id_room) => {
  const room = await Room.findByPk(id_room);
  if (!room) {
    throw new Error("Cômodo não encontrado");
  }

  // buscar dispositivos do cômodo
  return await DeviceRepository.findByRoom(id_room);
};

// editar dispositivo
export const updateDevice = async (id_device, data) => {
  // se quiser permitir mudar o cômodo, verifica se o cômodo existe
  if (data.id_room) {
    const room = await Room.findByPk(data.id_room);
    if (!room) throw new Error("Cômodo não encontrado");
  }

  const device = await DeviceRepository.update(id_device, data);
  if (!device) throw new Error("Dispositivo não encontrado");

  return device;
};

// remover dispositivo de um cômodo
export const deleteDevice = async (id_device) => {
  const device = await DeviceRepository.remove(id_device);
  if (!device) throw new Error("Dispositivo não encontrado");
  return device;
};