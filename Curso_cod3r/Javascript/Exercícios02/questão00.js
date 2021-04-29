function filtrarNumero(vetor){
    const novovet = []
    vetor.forEach(nome => {
        if(typeof nome === "number"){
            novovet.push(nome)
                }
    });
    console.log(novovet)
}

const vetor1 = ['gabriel', 'mario kart', 100, 50]

filtrarNumero(vetor1)
