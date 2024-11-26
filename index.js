const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000

const sequelize = require('./config/db')
const Usuario = require('./models/usuario')
const Ponto = require('./models/ponto')

const UsuarioRotas = require('./routes/usuario')
const PontoRotas = require('./routes/ponto')

sequelize.sync({alter: true})
.then(() => {
    console.log("BD sincronizado")
}).catch(error => {
    console.log("ERRO") 
})

app.use(cors())
app.use(express.json())
app.use('/', UsuarioRotas)
app.use('/', PontoRotas)

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições")
})