const fs = require("fs");

function readFile(pathData, res, view, obj){
    fs.readFile(pathData, 'utf8', (err, data) => {
        if(err) console.log("Erro ao ler o arquivo! ", err);

        var dados = JSON.parse(data);

        res.render(view, { 
            dados,
            obj
        });
    })
}

module.exports = readFile;