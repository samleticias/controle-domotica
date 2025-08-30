import House from "../models/House.js";

export const findAll = async () => {
  return await House.findAll();
};

export const findById = async (id) => {
  return await House.findByPk(id);
};

export const create = async (data) => {
  return await House.create(data);
};

export const update = async (id, data) => {
  const [rowsAffected, [updatedHouse]] = await House.update(data, {
    where: { id_house: id },
    returning: true, 
  });
  return updatedHouse;
};

export const remove = async (id) => {
  const deletedHouse = await House.findByPk(id);
  if (deletedHouse) {
    await deletedHouse.destroy();
  }
  return deletedHouse;
};