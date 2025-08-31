import * as SceneDeviceService from "../services/SceneDeviceService.js";

// obter todos os dispositivos da cena
export const getAll = async (req, res) => {
  try {
    const sceneDevices = await SceneDeviceService.getAllSceneDevices();
    res.json(sceneDevices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// buscar dispositivo da cena por id
export const getById = async (req, res) => {
  try {
    const sceneDevice = await SceneDeviceService.getSceneDeviceById(req.params.id);
    if (!sceneDevice) {
      return res.status(404).json({ error: "Ação da cena não encontrada" });
    }
    res.json(sceneDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// adicionar dispositivo a uma cena
export const create = async (req, res) => {
  try {
    const sceneDevice = await SceneDeviceService.createSceneDevice(req.body);
    res.status(201).json(sceneDevice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// atualizar dispositivo da cena
export const update = async (req, res) => {
  try {
    const sceneDevice = await SceneDeviceService.updateSceneDevice(req.params.id, req.body);
    if (!sceneDevice) {
      return res.status(404).json({ error: "Ação da cena não encontrada" });
    }
    res.json(sceneDevice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// remover dispositivo da cena
export const remove = async (req, res) => {
  try {
    const deleted = await SceneDeviceService.deleteSceneDevice(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Ação da cena não encontrada" });
    }
    res.json({ message: "Ação da cena removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};