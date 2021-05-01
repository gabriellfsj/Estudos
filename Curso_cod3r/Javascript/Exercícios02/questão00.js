function filtrarNumero(vetor){
    const novovet = []
    vetor.forEach(numero => {
        if(typeof numero === "number"){
            novovet.push(numero)
                }
    });
    console.log(novovet)
}

const vetor1 = ['gabriel', 'mario kart', 100, 50]

filtrarNumero(vetor1)
