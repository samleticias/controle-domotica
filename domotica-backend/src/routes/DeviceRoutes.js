import { Router } from "express";
import * as DeviceController from "../controllers/DeviceController.js";

const router = Router();

// criar dispositivo
router.post("/", DeviceController.create);

// listar todos os dispositivos 
router.get("/", async (req, res) => {
  try {
    const devices = await DeviceController.getAll?.() || [];
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// listar dispositivos por cômodo
router.get("/room/:id_room", DeviceController.getByRoom);

export default router;
