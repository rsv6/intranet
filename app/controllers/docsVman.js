const url = require("url");

const get = (req, res) => {
    // chama o arquivo: 'docsVman'
    const host = req.get('host');
    const url = req.url;
    console.log(host+url);

    // if(req.params.url === 'docs/vman'){

    // }

    res.render('docsVman')
}

module.exports = {
    get
}