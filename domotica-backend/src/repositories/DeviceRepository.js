import Device from "../models/Device.js";

export const create = async (data) => {
  return await Device.create(data);
};

export const findAll = async () => {
  return await Device.findAll();
};

export const findById = async (id) => {
  return await Device.findByPk(id);
};

export const findByRoom = async (id_room) => {
  return await Device.findAll({
    where: { id_room }
  });
};

export const update = async (id_device, data) => {
  const [rowsAffected, [updatedDevice]] = await Device.update(data, {
    where: { id_device },
    returning: true,
  });
  return updatedDevice; 
};

export const remove = async (id_device) => {
  const device = await Device.findByPk(id_device);
  if (!device) return null;
  await device.destroy();
  return device;
};