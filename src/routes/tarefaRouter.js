const express = require('express')
const router = express.Router()
const tarefaController = require('../controllers/tarefaController')

//Lista de rotas
router.get('/', tarefaController.listar)

//Exportar rotas
module.exports = router

