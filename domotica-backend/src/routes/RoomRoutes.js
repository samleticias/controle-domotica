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

// listar cômodos de uma casa
router.get("/house/:id_house", RoomController.getByHouse);

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Endpoints para gerenciar cômodos
 */

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Obter todos os cômodos
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Lista de cômodos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 *       500:
 *         description: Erro interno do servidor
 *   post:
 *     summary: Criar um novo cômodo
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomInput'
 *     responses:
 *       201:
 *         description: Cômodo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       400:
 *         description: Requisição inválida ou casa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Obter um cômodo por ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cômodo
 *     responses:
 *       200:
 *         description: Cômodo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Cômodo não encontrado
 *       500:
 *         description: Erro interno do servidor
 *   put:
 *     summary: Atualizar um cômodo por ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cômodo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomInput'
 *     responses:
 *       200:
 *         description: Cômodo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Cômodo não encontrado
 *       500:
 *         description: Erro interno do servidor
 *   delete:
 *     summary: Remover um cômodo por ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cômodo
 *     responses:
 *       200:
 *         description: Cômodo removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cômodo removido com sucesso
 *       404:
 *         description: Cômodo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /rooms/house/{id_house}:
 *   get:
 *     summary: Listar todos os cômodos de uma casa
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id_house
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da casa
 *     responses:
 *       200:
 *         description: Lista de cômodos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 *       400:
 *         description: Casa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *         id_room:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Sala
 *         id_house:
 *           type: integer
 *           example: 1
 *     RoomInput:
 *       type: object
 *       required:
 *         - name
 *         - id_house
 *       properties:
 *         name:
 *           type: string
 *           example: Quarto
 *         id_house:
 *           type: integer
 *           example: 1
 */

export default router;