

var servidor = document.querySelectorAll(".servidor");

const nome = [] 

// Funcionando
for(var p = 0; p < servidor.length; p++){
    // nome.push(servidor[p].textContent.trim().toLowerCase())
    // console.log(nome)

    // document.querySelectorAll('.servidor')[p].setAttribute("href", nome[p])
    document.querySelectorAll('.servidor')[p].setAttribute('href', `docs/${document.querySelectorAll('.servidor')[p].textContent.trim().toLowerCase()}`);
}