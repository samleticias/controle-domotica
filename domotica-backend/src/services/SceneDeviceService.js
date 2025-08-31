import SceneDevice from "../models/SceneDevice.js";
import Scene from "../models/Scene.js";
import Device from "../models/Device.js";

// ober lista de dispositivos associados a cenas
export const getAllSceneDevices = async () => {
  return await SceneDevice.findAll();
};

// buscar dispositivo de cena pelo id
export const getSceneDeviceById = async (id_scene_device) => {
  return await SceneDevice.findByPk(id_scene_device);
};

// adicionar um dispositivo a uma cena 
export const createSceneDevice = async (data) => {
  const { id_scene, id_device, action, order, interval } = data;

  // verifica se a cena existe
  const sceneExists = await Scene.findByPk(id_scene);
  if (!sceneExists) {
    throw new Error(`Cena com id ${id_scene} não existe`);
  }

  // verifica se o dispositivo existe
  const deviceExists = await Device.findByPk(id_device);
  if (!deviceExists) {
    throw new Error(`Dispositivo com id ${id_device} não existe`);
  }

  const sceneDevice = await SceneDevice.create({ id_scene, id_device, action, order, interval });
  return sceneDevice;
};

// atualizar dispositivo de uma cena
export const updateSceneDevice = async (id_scene_device, data) => {
  const [rowsAffected, [updatedSceneDevice]] = await SceneDevice.update(data, {
    where: { id_scene_device },
    returning: true,
  });

  return updatedSceneDevice || null;
};

// remover dispositivo de uma cena
export const deleteSceneDevice = async (id_scene_device) => {
  const sceneDevice = await SceneDevice.findByPk(id_scene_device);
  if (!sceneDevice) return null;

  await sceneDevice.destroy();
  return sceneDevice;
};

// buscar todos os dispositivos de uma cena específica
export const getDevicesByScene = async (id_scene) => {
  return await SceneDevice.findAll({
    where: { id_scene },
    order: [["sequence", "ASC"]], // caso exista ordem de execução
  });
};
