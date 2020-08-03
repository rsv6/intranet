//const writeFileJSON = require("./writeFileJSON");

document.querySelector("#btnCadDocs").addEventListener("click", (e) => {
    e.preventDefault();
    //var writeFileJSON = require("./writeFileJSON");
    
    const objDoc = {
        servidor: document.querySelector("#servidor").value,
        caminho: document.querySelector("#caminho").value,
        usuario: document.querySelector("#usuario").value,
        senha: document.querySelector("#senha").value,
        atividade: document.querySelector("#atividade").value
    };

    writeFileJSON(objDoc);
    
    //console.log(objDoc.servidor);

    document.querySelector("#formCad").reset();
})
