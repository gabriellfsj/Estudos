function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
    somaTotal += numero
  }
    return console.log(somaTotal / quantidadeDeNumeros)
    }

const vetor = [1,2,3,4,5,6,7]

calcularMedia(vetor)