import { Router } from "express";
import * as HouseController from "../controllers/HouseController.js";

const router = Router();

// obter todas as casas cadastradas
router.get("/", HouseController.getAll);

// buscar casa por id
router.get("/:id", HouseController.getById);

// criar casa
router.post("/", HouseController.create);

// atualizar casa por id
router.put("/:id", HouseController.update);

// remover casa por id
router.delete("/:id", HouseController.remove);

export default router;