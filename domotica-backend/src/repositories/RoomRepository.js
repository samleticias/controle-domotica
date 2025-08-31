import Room from "../models/Room.js";

export const findAll = async () => {
  return await Room.findAll();
};

export const findById = async (id) => {
  return await Room.findByPk(id);
};

export const create = async (data) => {
  return await Room.create(data);
};

export const update = async (id, data) => {
  const [rowsAffected, [updatedRoom]] = await Room.update(data, {
    where: { id_room: id },
    returning: true,
  });
  return updatedRoom;
};

export const remove = async (id) => {
  const room = await Room.findByPk(id);
  if (room) await room.destroy();
  return room;
};

export const findByHouse = async (id_house) => {
  return await Room.findAll({
    where: { id_house }
  });
};