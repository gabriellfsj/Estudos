function numerosPares(vetor) {
    const pares = []
    vetor.forEach(element => {
        if(element%2 == 0 ){
            pares.push(element)
        }
    });
    console.log(pares)
}

function numerosImpares(vetor) {
    const pares = []
    vetor.forEach(element => {
        if(element%2 != 0 ){
            pares.push(element)
        }
    });
    console.log(pares)
}

vet = [1,2,3,4,5,6,7,87,10,50,30,15]

numerosPares(vet)
numerosImpares(vet)