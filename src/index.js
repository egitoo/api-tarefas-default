const express = require('express')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const tarefaRouter = require('./routes/tarefaRouter')

const swaggerDocument = YAML.load('/docs/swagger.yml')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('<h1>Olá mundo!</h1>')
})

app.use('/api/v2/tarefas', tarefaRouter)
app.use(morgan('dev'))
app.use('/api/v2/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const port = process.env.PORT
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })
