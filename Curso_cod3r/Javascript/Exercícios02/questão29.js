function seletor(numero, quantidadeDeDigitos){
    let novoResultado = []
    numero.filter(numeros => {
        const contadorDeDigitos = String(numeros).length
        if(quantidadeDeDigitos == contadorDeDigitos){
            novoResultado.push(numeros)
        }
    })
    console.log(novoResultado)
}

const vetor1 = [10, 33, 55, 1, 2, 3, 134]
seletor(vetor1, 3)