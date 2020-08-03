// const fs = require('fs')
// const path = require('path')
// const pathData = path.join(__dirname, '../../models/db/docs/docs.json')

// function writeFileJSON(objCad){
//     fs.readFile(pathData, 'utf8', (err, data) => {
//         const objData = JSON.parse(data)
//         if(err) console.log("Erro ao ler arquivo ", err)

//         objData.push(objCad)
//         fs.writeFile(pathData, objData, (err, reslt) =>{
//             if(err) console.log("Erro ao gravar dados no arquivo ", err)

//             console.log("Dado salvo com sucesso ", reslt)
//         })
//     })
// }


// module.exports = writeFileJSON;