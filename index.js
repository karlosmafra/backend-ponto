const express = require('express')
const app = express()
const PORT = 3000

const sequelize = require('./config/db')
const Usuario = require('./models/usuario')
const Ponto = require('./models/ponto')

sequelize.sync({alter: true})
.then(() => {
    console.log("BD sincronizado")
}).catch(error => {
    console.log("ERRO") 
})


// ROTAS

app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso")
})

// Retornar todos os usuários
app.get('/users', (req, res) => {
    res.send("Retornar todos os usuários")
})

// Retornar um usuário
app.get('/user/:id', (req, res) => {
    res.send(req.params.id)
})

app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso com post realizada com sucesso")
})

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições")
})