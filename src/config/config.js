var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')
var PessoaRoutes = require('../routes/pessoa')
var app = express()

function config(){
    //ARQUIVO  DE CONFIGURAÇÂO
    app.use(express.json());
    app.use(session({
        secret:"alguma-chave",
        resave: false,
        saveUninitialized: true
    }))

    mongoose.connect('mongodb://localhost:27017/test').then(() => {
        console.log("Conexão realizada!")
    }).catch((err) => {
        console.log("Erro: ", err)
    })
    ///////////////////////////////////


    //criando das rotas da aplicação
    let routes = PessoaRoutes(app)

    return app;
}

module.exports = config;