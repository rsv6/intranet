const get = (req, res) => {
    res.render("login_task")
}

const post = (req, res) => {
    let auth = require('../public/js/auth');
    let readFile = require('../public/js/readFile');

    const login = req.body.login;
    const senha = req.body.senha;
    
    // Metodo de autenticação:
    auth(login, senha, res, "taskGer");
}   


module.exports = {
    get,
    post
}
