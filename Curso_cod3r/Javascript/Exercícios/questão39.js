function trocaVetor(vet1, vet2){
    let vet0 = []
    vet0[0] = vet1[0]
    vet1[0] = vet2[0] 
    vet2[0] = vet0[0]
    console.log(vet1)
    console.log(vet2)
}

const vet1 = [1,2,3,4,5]
const vet2 = [6,7,8,9,10]

trocaVetor(vet1, vet2)
