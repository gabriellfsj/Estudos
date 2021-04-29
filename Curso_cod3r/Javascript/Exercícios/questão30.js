function maiorEmenor(vetor = []){
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        maior = vetor[i]
        menor = vetor[i]
        if(vetor[i]>maior){
            maior = vetor[i]
        }
        if(vetor[i]<menor){
            maior = vetor[i]
        }
        
    }
}
