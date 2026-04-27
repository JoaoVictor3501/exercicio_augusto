/**
 * Fazendo as importações necessárias para as funções 
 * do controlador
 */
var PessoaModel = require("../models/pessoa")

/**
 * Criando uma classe no padrão JS para conter os 
 * métodos que vamos utilizar
 * 
 * @returns 
 */
function PessoaController() {

    let Pessoa = {}

    /**
     * Método para cadastrar uma nova pessoa no banco de 
     * dados Mongo
     * 
     * @param {*} req 
     * @param {*} res 
     */
    Pessoa.cadastraPessoa = (req, res) => {
        let pessoa = req.body

        const novoPessoa = PessoaModel(pessoa)

        novoPessoa.save().then(() => {
            res.json({ result: "Salvo com Sucesso!" })
        }).catch((err) => {
            res.json({ result: "Erro!", detail: err })
        })

    }

    /**
     * Método para listar todas as pessoas cadastradas
     * no nosso banco Mongo
     * 
     * @param {*} req 
     * @param {*} res 
     */
    Pessoa.listaPessoas = (req, res) => {
        PessoaModel.find().then((pessoas) => {
            res.json({ result: pessoas })
        }).catch((err) => {
            res.json({ result: "Erro!", detail: err })
        })
    }

    Pessoa.login = (req, res) => {
        req.session.user = {id: '15', nome: "Fulano"}
        res.send("usuário salvo!")
    }
    
    Pessoa.checkSession = (req, res) => {
        console.log(req.session.user)
        res.send(req.session.user)
    }

    return Pessoa;

}

module.exports = PessoaController