const express = require('express')
const app = express()
const cors = require ('cors');
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

app.use(cors());
app.use(express.json());

// ROTAS

// Rota que retorna TODOS os usuários da aplicação
app.get('/usuarios', async (req, res) => {    
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Rota que busca um usuário específico 
app.get('/usuario/:id_usuario', async (req, res) => {
    const usuario = await Usuario.findAll({
        where: {
          id_usuario: req.params.id_usuario
        },
    });

    res.json(usuario);
});

// Rota que cria um usuário
app.post('/usuario', async (req, res) => {
    const usuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
        permissao: req.body.permissao,
    })
    res.status(201).json(usuario)
})

app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso")
})

app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso com post realizada com sucesso")
})

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições")
})