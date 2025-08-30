import * as DeviceService from "../services/DeviceService.js";

export const create = async (req, res) => {
  try {
    const newDevice = await DeviceService.createDevice(req.body);
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getByRoom = async (req, res) => {
  try {
    const devices = await DeviceService.getDevicesByRoom(req.params.id_room);
    res.json(devices);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};