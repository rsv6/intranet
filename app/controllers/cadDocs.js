const get = (req, res) => {
    //res.render('index', { msg: "Acesso apenas autorizado!!!" })
    res.render("cadDocs")
}

const post = (req, res) => {
    res.render('cadDocs')
}

module.exports = {
    get,
    post
}