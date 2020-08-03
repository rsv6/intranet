const btnRestante = document.querySelector("#btnRestante").addEventListener("click", function(){
    const $ = document.querySelector.bind(document);

    const opcao = $("#opcao").value;
    const resto = $("#resto").value;
    //const resto = $("#saldo");
    const restante = parseInt($("#restante").value = (resto / opcao).toFixed(0));


    console.log(restante.toFixed(2));

});
