const express = require('express')
const router = express.Router()
const Ponto = require('../models/ponto')
const { where } = require('sequelize')

router.get('/pontos', async (req, res) => {    
    const pontos = await Ponto.findAll()
    res.json(pontos);
})

router.get('/ponto/:id_ponto', async (req, res) => {    
    const ponto = await Ponto.findByPk(req.params.id_ponto)
    res.json(ponto);
})

router.get('/ponto/usuario/:id_usuario', async (req, res) => {
    const pontos = await Ponto.findAll(
        where({id_usuario: req.body.id_usuario})
    )
    res.json(pontos);
})

router.post('/ponto', async (req, res) => {
    const ponto = await Ponto.create({
        tipo: req.body.tipo,
        dataHora: req.body.dataHora,
        id_usuario: req.body.id_usuario
    })

    res.json(ponto)
})

router.delete('/ponto/:id_ponto', async (req, res) => {
    const id_ponto = req.params.id_ponto
    const ponto = await ponto.findByPk(id_ponto)
    if (!ponto) {
        return
    }
    await ponto.destroy()
    res.send("Ponto deletado com sucesso")
})

router.put('/ponto/:id_ponto', async (req, res) => {
    const id_ponto = req.params.id_ponto
    const {tipo, dataHora} = req.body
    const ponto = await ponto.findByPk(id_ponto)
    if (!ponto) {
        return res.send("Erro ao editar Ponto")
    }
    ponto.update({tipo, dataHora})
    res.send("Ponto atualizado com sucesso")
})

module.exports = router