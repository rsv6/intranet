const fs = require('fs');
const path = require('path');
const { EEXIST } = require('constants');
const pathData = path.join(__dirname, "../../models/db/usuarios/usuarios.json");
const crypto = require("crypto");


function auth(login, senha, res, view, req){

    fs.readFile(pathData, 'utf8', (err, data) => {
        if(err) console.log("Error: ", err)
        
        const dados = JSON.parse(data);
 
        const objSession = {}
                
        dados.map(elem => {
            if(elem.login === login && elem.senha === senha){
                const pathDocs = path.join(__dirname, `../../models/db/${view}/${view}.json`);
                const readFilePath = require("../../public/js/readFile");
                console.log(pathDocs)
                console.log("Sucesso")
                
                req.session.login = elem.login;
                req.session.id = crypto.randomBytes(20).toString('hex');

                objSession.user = req.session.login;
                objSession.id_session = req.session.id;
                objSession.session = "logado";

                console.log(objSession)
                        
                readFilePath(pathDocs, res, view, objSession);
            }else{
                res.render('index', { msg: "Login ou senha incorreta!!!" });
            }
        })
    })
}

module.exports = auth;