import * as SceneService from "../services/SceneService.js";

// obter todas as cenas
export const getAll = async (req, res) => {
  try {
    const scenes = await SceneService.getAllScenes();
    res.json(scenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// buscar cena por id
export const getById = async (req, res) => {
  try {
    const scene = await SceneService.getSceneById(req.params.id);
    if (!scene) {
      return res.status(404).json({ error: "Cena não encontrada" });
    }
    res.json(scene);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// criar cena
export const create = async (req, res) => {
  try {
    const scene = await SceneService.createScene(req.body);
    res.status(201).json(scene);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// atualizar cena
export const update = async (req, res) => {
  try {
    const scene = await SceneService.updateScene(req.params.id, req.body);
    if (!scene) {
      return res.status(404).json({ error: "Cena não encontrada" });
    }
    res.json(scene);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// deletar cena
export const remove = async (req, res) => {
  try {
    const deleted = await SceneService.deleteScene(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Cena não encontrada" });
    }
    res.json({ message: "Cena removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ativar/desativar cena
export const toggle = async (req, res) => {
  try {
    const { is_active } = req.body; // true ou false
    const scene = await SceneService.toggleScene(req.params.id, is_active);
    res.json(scene);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// acionar cena
export const execute = async (req, res) => {
  try {
    const result = await SceneService.executeScene(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};