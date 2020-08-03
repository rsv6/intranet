const get = (req, res) => {
    
    req.session.destroy(err => {
        if(err) res.negotiate(err);

        console.log("Usuario desconectado!")
        res.redirect('/')
    });
}

module.exports = {
    get
}