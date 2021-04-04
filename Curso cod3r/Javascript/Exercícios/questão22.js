function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        console.log((valor * ((1 + (5/100))**atraso)).toFixed(2))
    } else {
        console.log('Mês inválido.')
    }
}

calcularValor(1, 100)