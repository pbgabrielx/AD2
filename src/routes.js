const express = require('express');
const router = express.Router();

const FuncController = require('./controllers/FuncController');

router.get('/func', FuncController.buscarTodos);
router.get('/func/:id', FuncController.buscarUm);
router.post('/func',FuncController.inserir);
router.put('/func/:id', FuncController.alterar);
router.delete('/func/:id', FuncController.excluir);

module.exports = router;