
function dataSession(res, obj){
    const fs = require('fs');
    const path = require("path");
    const pathFile = path.join(__dirname, '../models/db/docs/docs.json')
 
    fs.readFile(pathFile, 'utf8', (err, data) => {
        if(err) console.log("Erro ao ler arquivo!")

        const dados = JSON.parse(data);

        //document.querySelector("a")

        res.render('docs', { 
            dados,
            obj
         })
    })
}

const get = (req, res) => {
    const objSession = {}

    if(req.session.login){
        objSession.user = req.session.login;
        objSession.id_session = req.session.id;
        objSession.session = 'logado'

        console.log(`Usuário logado: ${req.session.login}`);
        console.log(req.session.id);
        //const user = req.session.login
        //res.render('docs');
        dataSession(res, objSession);

    }else{

        console.log("Usuário não logado!")
        res.render("login_docs");
    }
    //res.render("login_docs")
}

const post = (req, res) => {
    let auth = require('../public/js/auth');

    const login = req.body.login;
    const senha = req.body.senha;

    
    // Metodo de autenticação:
    auth(login, senha, res, 'docs', req);
}   

module.exports = {
    get,
    post
}
