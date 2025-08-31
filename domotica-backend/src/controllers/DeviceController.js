import * as DeviceService from "../services/DeviceService.js";

export const getAll = async (req, res) => {
  try {
    const devices = await DeviceService.getAllDevices();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

export const getById = async (req, res) => {
  try {
    const device = await DeviceService.getDeviceById(req.params.id_device);
    res.json(device);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const device = await DeviceService.updateDevice(req.params.id_device, req.body);
    res.json(device);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await DeviceService.deleteDevice(req.params.id_device);
    res.json({ message: "Dispositivo removido com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};