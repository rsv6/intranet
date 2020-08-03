var botaoCalcular = document.querySelector("#calcular");

// Funcao anonima do botao. addEventListener:
botaoCalcular.addEventListener("click", function(){
    var valoresNovos = getValues(document.querySelectorAll("#novo"), "td input");
    var valoresAntigos = getValues(document.querySelectorAll("#antigo"), "td input");
    var valoresUnd = getValues(document.querySelectorAll("#valor-und td"));
    var objResultados = calcValores(valoresNovos, valoresAntigos, valoresUnd);
    
    mostraResultados(objResultados);
    console.log(objResultados[0].valorConsumido);
});

// Preenche os valores no HTML:
function mostraResultados(obj){
    for(var i = 0; i >= 0 && i < obj[0].total.length +0; i++){
        document.querySelectorAll("#total td")[i +1].textContent = obj[0].total[i];
        document.querySelectorAll("#calculo td")[i +1].textContent = obj[0].calculo[i].toFixed("2");
        document.querySelector("#valor-consumido").textContent = obj[0].valorConsumido.toFixed("2");
        document.querySelector("#saldo").textContent = obj[0].saldo.toFixed("2");
    }
}

// Calcula inputs com valores já estabelecidos:
function calcValores(valoresNovos, valoresAntigos, valoresUnd){
    var resultado = [{}];
    var total = [];
    var calculo = [];
    var valorConsumido = 0;
    var franquia = document.querySelector("#franquia");
    var saldo = 0;

    for(var i = 0; i < valoresNovos.length; i++){   
        // Subtração dos valores Novos - Antigos:
        total.push(parseInt(valoresNovos[i]) - parseInt(valoresAntigos[i]));
        // Calculo dos valores unitários:
        calculo.push(parseFloat(valoresUnd[i].replace(",", ".")).toFixed("2") * total[i]);
        // Calculo de todos os valores:
        valorConsumido += calculo[i];
    }
    franquia = parseFloat(franquia.textContent.replace(",",".")).toFixed("2");
    saldo = franquia - parseFloat(valorConsumido).toFixed("2");
    resultado =[{
        "total": total,
        "calculo": calculo,
        "valorConsumido": valorConsumido,
        "franquia": franquia,
        "saldo": saldo
    }]; 
    return resultado;
}

// Busca, valor de tr -> td -> input.value:
function getValues(tipo, busca){
    var valores = [];
    if(busca === null || busca === undefined){
        for(i = 1; i < tipo.length; i++){
            var valoresUnd = tipo[i].textContent;
            valores.push(valoresUnd)
        }
    }else{
        for(var i = 0; i < tipo.length; i++){
            var lista = tipo[i];
            var valoresBusca = lista.querySelectorAll(busca);
            for(var j = i; j < valoresBusca.length; j++){
                var valor = valoresBusca[j].value;
                valores.push(valor);
            }
        }
    }
    return valores;
}