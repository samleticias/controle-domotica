import Scene from "../models/Scene.js";
import SceneDevice from "../models/SceneDevice.js";
import { toggleDeviceState } from "./DeviceService.js";

export const createScene = async (data) => {
  return await Scene.create(data);
};

export const getAllScenes = async () => {
  return await Scene.findAll();
};

export const getSceneById = async (id_scene) => {
  return await Scene.findByPk(id_scene);
};

export const updateScene = async (id_scene, data) => {
  const [rowsAffected, [updatedScene]] = await Scene.update(data, {
    where: { id_scene },
    returning: true,
  });
  return updatedScene;
};

export const deleteScene = async (id_scene) => {
  const scene = await Scene.findByPk(id_scene);
  if (!scene) return null;
  await scene.destroy();
  return scene;
};

// ativar ou desativar cena
export const toggleScene = async (id_scene, isActive) => {
  const scene = await Scene.findByPk(id_scene);
  if (!scene) throw new Error(`Cena com id ${id_scene} não existe`);

  scene.is_active = isActive;
  await scene.save();
  return scene;
};

// acionar cena (executar todos os dispositivos da cena)
export const executeScene = async (id_scene) => {
  const scene = await Scene.findByPk(id_scene);
  if (!scene) throw new Error(`Cena com id ${id_scene} não existe`);
  if (!scene.is_active) throw new Error(`Cena '${scene.name}' está desativada`);

  const sceneDevices = await SceneDevice.findAll({
    where: { id_scene },
    order: [["order", "ASC"]]
  });

  for (const { id_device, action, interval } of sceneDevices) {
    console.log(`Executando ação "${action}" no dispositivo ${id_device}`);

    if (interval && interval > 0) {
      await new Promise(resolve => setTimeout(resolve, interval * 1000));
    }
    toggleDeviceState(id_device, action === "turn_on");
  }

  return { message: `Cena '${scene.name}' executada com sucesso!` };
};