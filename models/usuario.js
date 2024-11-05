const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')


// Definir o modelo USUARIO

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: DataTypes.ENUM('user', 'adm'),
        allowNull: false
    },
}, {
    timestamps: true
})

module.exports = Usuario