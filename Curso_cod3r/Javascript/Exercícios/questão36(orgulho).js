const vetor = [1,2,3,4,5]
const numero = 5

function multiplicar(vetor, numero){
    let mult = []
    for (let i = 0; i < vetor.length; i++) {
        mult[i] = vetor[i] * numero
        
    }
    return mult
}

function multiplicarSe(vetor, numero){
    let mult = []
    if(numero>=5){
    for (let i = 0; i < vetor.length; i++) {
        mult[i] = vetor[i] * numero
        
    }
}else{
    return 'O numero digitado é menor que cinco'
}
    return mult
}


console.log(multiplicar(vetor, numero))
console.log(multiplicarSe(vetor, numero))