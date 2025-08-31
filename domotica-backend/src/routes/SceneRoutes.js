import { Router } from "express";
import * as SceneController from "../controllers/SceneController.js";

const router = Router();

// obter todas as cenas
router.get("/", SceneController.getAll);

// buscar cena por id
router.get("/:id", SceneController.getById);

// criar cena
router.post("/", SceneController.create);

// atualizar cena
router.put("/:id", SceneController.update);

// deletar cena
router.delete("/:id", SceneController.remove);

// ativar/desativar cena
router.patch("/:id/toggle", SceneController.toggle);

// acionar cena
router.post("/:id/execute", SceneController.execute);

export default router;