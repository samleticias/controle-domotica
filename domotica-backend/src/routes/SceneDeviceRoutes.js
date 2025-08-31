import { Router } from "express";
import * as SceneDeviceController from "../controllers/SceneDeviceController.js";

const router = Router();

// obter todos os dispositivos da cena
router.get("/", SceneDeviceController.getAll);

// buscar dispositivo da cena por id
router.get("/:id", SceneDeviceController.getById);

// adicionar dispositivo a uma cena
router.post("/", SceneDeviceController.create);

// atualizar dispositivo da cena
router.put("/:id", SceneDeviceController.update);

// remover dispositivo da cena
router.delete("/:id", SceneDeviceController.remove);

export default router;