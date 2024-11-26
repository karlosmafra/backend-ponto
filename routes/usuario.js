const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario')

// ROTAS

// Rota que retorna TODOS os usuários da aplicação
router.get('/usuarios', async (req, res) => {    
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Rota que busca um usuário específico 
router.get('/usuario/:id_usuario', async (req, res) => {
    const usuario = await Usuario.findAll({
        where: {
          id_usuario: req.params.id_usuario
        },
    });

    res.json(usuario);
});

// Rota que cria um usuário
router.post('/usuario', async (req, res) => {
    const usuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
        permissao: req.body.permissao,
    })
    res.status(201).json(usuario)
})

// Rota que deleta um usuário
router.delete('/usuario/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario
    const usuario = await Usuario.findByPk(id_usuario)
    if (!usuario) {
        return
    }
    await usuario.destroy()
    res.send("Usuário deletado com sucesso")
})

// Editar usuário
router.put('/usuario/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario
    const {nome, email, login, senha, permissao} = req.body
    const usuario = await Usuario.findByPk(id_usuario)
    if (!usuario) {
        return res.send("Erro ao editar usuário")
    }
    usuario.update({nome, email, login, senha, permissao})
    res.send("Usuário atualizado com sucesso")
})

router.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso")
})

router.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso com post realizada com sucesso")
})

module.exports = router