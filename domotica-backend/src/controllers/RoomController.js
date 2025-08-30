import * as RoomService from "../services/RoomService.js";

export const getAll = async (req, res) => {
  try {
    const rooms = await RoomService.getAllRooms();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const room = await RoomService.getRoomById(req.params.id);
    if (!room) return res.status(404).json({ message: "Cômodo não encontrado" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const newRoom = await RoomService.createRoom(req.body);
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const room = await RoomService.updateRoom(req.params.id, req.body);
    if (!room) return res.status(404).json({ message: "Cômodo não encontrado" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const room = await RoomService.deleteRoom(req.params.id);
    if (!room) return res.status(404).json({ message: "Cômodo não encontrado" });
    res.json({ message: "Cômodo removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};