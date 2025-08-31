import { Router } from "express";
import * as HouseController from "../controllers/HouseController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Endpoints para gerenciar casas
 */

/**
 * @swagger
 * /houses:
 *   get:
 *     summary: Obter todas as casas
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Lista de casas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/House'
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", HouseController.getAll);

/**
 * @swagger
 * /houses/{id}:
 *   get:
 *     summary: Obter uma casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da casa
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/House'
 *       404:
 *         description: Casa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", HouseController.getById);

/**
 * @swagger
 * /houses:
 *   post:
 *     summary: Criar uma nova casa
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HouseInput'
 *     responses:
 *       201:
 *         description: Casa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/House'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", HouseController.create);

/**
 * @swagger
 * /houses/{id}:
 *   put:
 *     summary: Atualizar uma casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da casa
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HouseInput'
 *     responses:
 *       200:
 *         description: Casa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/House'
 *       404:
 *         description: Casa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/:id", HouseController.update);

/**
 * @swagger
 * /houses/{id}:
 *   delete:
 *     summary: Remover uma casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da casa
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Casa removida com sucesso
 *       404:
 *         description: Casa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/:id", HouseController.remove);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     House:
 *       type: object
 *       properties:
 *         id_house:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Casa da Família Silva
 *         address:
 *           type: string
 *           example: Rua das Flores, 123
 *     HouseInput:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         name:
 *           type: string
 *           example: Casa da Família Pereira
 *         address:
 *           type: string
 *           example: Rua Primavera, 789
 */