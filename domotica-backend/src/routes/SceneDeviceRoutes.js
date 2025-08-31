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

/**
 * @swagger
 * tags:
 *   name: SceneDevices
 *   description: Endpoints para gerenciar ações de cena
 */

/**
 * @swagger
 * /scene-devices:
 *   get:
 *     summary: Obter todos os dispositivos de todas as cenas (ações)
 *     tags: [SceneDevices]
 *     responses:
 *       200:
 *         description: Lista de dispositivos de todas as cenas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SceneDevice'
 *       500:
 *         description: Erro interno do servidor
 *   post:
 *     summary: Adicionar dispositivo a uma cena (criar ação)
 *     tags: [SceneDevices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SceneDeviceInput'
 *     responses:
 *       201:
 *         description: Dispositivo adicionado à cena
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SceneDevice'
 *       400:
 *         description: Dados inválidos ou cena/dispositivo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /scene-devices/{id}:
 *   get:
 *     summary: Obter dispositivo da cena por ID (buscar ação)
 *     tags: [SceneDevices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo da cena
 *     responses:
 *       200:
 *         description: Dispositivo da cena encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SceneDevice'
 *       404:
 *         description: Ação da cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 *   put:
 *     summary: Atualizar dispositivo da cena (atualizar ação)
 *     tags: [SceneDevices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo da cena
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SceneDeviceInput'
 *     responses:
 *       200:
 *         description: Dispositivo da cena atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SceneDevice'
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Ação da cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 *   delete:
 *     summary: Remover dispositivo da cena (remover ação)
 *     tags: [SceneDevices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo da cena
 *     responses:
 *       200:
 *         description: Dispositivo da cena removido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ação da cena removida com sucesso
 *       404:
 *         description: Ação da cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SceneDevice:
 *       type: object
 *       properties:
 *         id_scene_device:
 *           type: integer
 *           example: 1
 *         id_scene:
 *           type: integer
 *           example: 1
 *         id_device:
 *           type: integer
 *           example: 2
 *         order:
 *           type: integer
 *           example: 1
 *         interval:
 *           type: integer
 *           example: 5
 *         action:
 *           type: string
 *           enum: [turn_on, turn_off]
 *           example: turn_on
 *     SceneDeviceInput:
 *       type: object
 *       required:
 *         - id_scene
 *         - id_device
 *         - action
 *       properties:
 *         id_scene:
 *           type: integer
 *           example: 1
 *         id_device:
 *           type: integer
 *           example: 2
 *         order:
 *           type: integer
 *           example: 1
 *         interval:
 *           type: integer
 *           example: 5
 *         action:
 *           type: string
 *           enum: [turn_on, turn_off]
 *           example: turn_on
 */

export default router;