const vetor = [2, 3, 4, 10, 15, 40, 5]

function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

console.log(mediaVetor(vetor))