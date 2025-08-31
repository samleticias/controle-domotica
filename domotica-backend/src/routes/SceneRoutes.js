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

/**
 * @swagger
 * tags:
 *   name: Scenes
 *   description: Endpoints para gerenciar cenas
 */

/**
 * @swagger
 * /scenes:
 *   get:
 *     summary: Obter todas as cenas
 *     tags: [Scenes]
 *     responses:
 *       200:
 *         description: Lista de cenas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Scene'
 *       500:
 *         description: Erro interno do servidor
 *   post:
 *     summary: Criar nova cena
 *     tags: [Scenes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SceneInput'
 *     responses:
 *       201:
 *         description: Cena criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scene'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /scenes/{id}:
 *   get:
 *     summary: Obter cena por ID
 *     tags: [Scenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da cena
 *     responses:
 *       200:
 *         description: Cena encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scene'
 *       404:
 *         description: Cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 *   put:
 *     summary: Atualizar cena
 *     tags: [Scenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da cena
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SceneInput'
 *     responses:
 *       200:
 *         description: Cena atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scene'
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 *   delete:
 *     summary: Deletar cena
 *     tags: [Scenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da cena
 *     responses:
 *       200:
 *         description: Cena removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cena removida com sucesso
 *       404:
 *         description: Cena não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /scenes/{id}/toggle:
 *   patch:
 *     summary: Ativar ou desativar cena
 *     tags: [Scenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da cena
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               is_active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Cena ativada/desativada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scene'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /scenes/{id}/execute:
 *   post:
 *     summary: Acionar cena
 *     tags: [Scenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da cena
 *     responses:
 *       200:
 *         description: Cena executada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cena 'Cena Noite' executada com sucesso!
 *       400:
 *         description: Cena desativada ou dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Scene:
 *       type: object
 *       properties:
 *         id_scene:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Cena Noite
 *         is_active:
 *           type: boolean
 *           example: true
 *     SceneInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Cena Manhã
 *         is_active:
 *           type: boolean
 *           example: true
 */

export default router;