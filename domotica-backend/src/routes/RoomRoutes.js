import { Router } from "express";
import * as RoomController from "../controllers/RoomController.js";

const router = Router();

// obter todos os cômodos
router.get("/", RoomController.getAll);

// buscar cômodo por id
router.get("/:id", RoomController.getById);

// criar novo cômodo
router.post("/", RoomController.create);

// atualizar cômodo por id
router.put("/:id", RoomController.update);

// remover cômodo por id
router.delete("/:id", RoomController.remove);

export default router;