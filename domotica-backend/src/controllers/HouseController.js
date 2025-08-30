import * as HouseService from "../services/HouseService.js";

export const getAll = async (req, res) => {
  try {
    const houses = await HouseService.getAllHouses();
    res.json(houses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const house = await HouseService.getHouseById(req.params.id);
    if (!house) return res.status(404).json({ message: "Casa não encontrada" });
    res.json(house);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const newHouse = await HouseService.createHouse(req.body);
    res.status(201).json(newHouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const house = await HouseService.updateHouse(req.params.id, req.body);
    if (!house) return res.status(404).json({ message: "Casa não encontrada" });
    res.json(house);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const house = await HouseService.deleteHouse(req.params.id);
    if (!house) return res.status(404).json({ message: "Casa não encontrada" });
    res.json({ message: "Casa removida com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};