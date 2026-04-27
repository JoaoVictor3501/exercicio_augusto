var PessoaController = require("../controllers/pessoa")
var controller = PessoaController()

function PessoaRoutes(app) {

    /////////////////MÉTODOS DA API/////////////////
    /**
     * Método para tratar requisições de cadastro de novas
     * pessoas
     */
    app.post("/pessoa", controller.cadastraPessoa)

    /**
     * Método para tratar requisições de listagem de pessoas
     * cadastradas no sistema
     */
    app.get("/pessoa", controller.listaPessoas)

    ///////////////////////////////////

    app.get("/login", (req, res) =>{
        const {nome, id} = req.query;
        if (!nome || !id){
            return res.send("Use: /login?nome=joao&id=1")
        }
        req.session.usuario = {
            nome, id

        }
        res.send("Usuário logado")
    });
    

    app.get("/check", (req, res) =>{
        if (req.session.usuario){
            res.send(req.session.usuario)
        }else{
            res.send("Nenhum usuário está logado!")
        }
    })



    return app

}

module.exports = PessoaRoutes