import { Router } from "express";
import * as DeviceController from "../controllers/DeviceController.js";

const router = Router();

// listar todos os dispositivos cadastrados
router.get("/", DeviceController.getAll);

// criar dispositivo
router.post("/", DeviceController.create);

// buscar dispositivo por id
router.get("/:id_device", DeviceController.getById);

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

// atualizar dispositivo
router.put("/:id_device", DeviceController.update);

// remover dispositivo de um cômodo (excluir dispositivo)
router.delete("/:id_device", DeviceController.remove);

// ligar/desligar dispositivo
router.put("/:id_device/state", DeviceController.toggleState);

/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: Endpoints para gerenciar dispositivos
 */

/**
 * @swagger
 * /devices:
 *   get:
 *     summary: Obter todos os dispositivos
 *     tags: [Devices]
 *     responses:
 *       200:
 *         description: Lista de dispositivos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Device'
 *       500:
 *         description: Erro interno do servidor
 *   post:
 *     summary: Criar dispositivo
 *     tags: [Devices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeviceInput'
 *     responses:
 *       201:
 *         description: Dispositivo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       400:
 *         description: Campos obrigatórios ausentes ou cômodo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /devices/{id_device}:
 *   get:
 *     summary: Obter dispositivo por ID
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id_device
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo
 *     responses:
 *       200:
 *         description: Dispositivo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       404:
 *         description: Dispositivo não encontrado
 *       500:
 *         description: Erro interno do servidor
 *   put:
 *     summary: Atualizar dispositivo
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id_device
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeviceInput'
 *     responses:
 *       200:
 *         description: Dispositivo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       400:
 *         description: Dados inválidos ou cômodo não encontrado
 *       404:
 *         description: Dispositivo não encontrado
 *       500:
 *         description: Erro interno do servidor
 *   delete:
 *     summary: Remover dispositivo
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id_device
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo
 *     responses:
 *       200:
 *         description: Dispositivo removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Dispositivo removido com sucesso
 *       404:
 *         description: Dispositivo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /devices/room/{id_room}:
 *   get:
 *     summary: Listar dispositivos por cômodo
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id_room
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cômodo
 *     responses:
 *       200:
 *         description: Lista de dispositivos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Device'
 *       400:
 *         description: Cômodo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /devices/{id_device}/state:
 *   put:
 *     summary: Ligar/Desligar dispositivo
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id_device
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               state:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Estado do dispositivo alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       400:
 *         description: Campo 'state' inválido ou dispositivo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Device:
 *       type: object
 *       properties:
 *         id_device:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Lâmpada
 *         type:
 *           type: string
 *           example: LED
 *         state:
 *           type: boolean
 *           example: false
 *         id_room:
 *           type: integer
 *           example: 1
 *     DeviceInput:
 *       type: object
 *       required:
 *         - name
 *         - id_room
 *       properties:
 *         name:
 *           type: string
 *           example: Ventilador
 *         type:
 *           type: string
 *           example: De Teto
 *         state:
 *           type: boolean
 *           example: false
 *         id_room:
 *           type: integer
 *           example: 1
 */

export default router;
