var mongoose = require('mongoose')

//EM CADA ARQUIVO DE CRIAÇÃO DE CADA MODEL
//definindo a estrutura da coleção
const PessoaSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
})
//estou criando o modelo e assinando ele no banco
const PessoaModel = mongoose.model('Pessoa', PessoaSchema)
////////////////////////////////////////////

module.exports = PessoaModel