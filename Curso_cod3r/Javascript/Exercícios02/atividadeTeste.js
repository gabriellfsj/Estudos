function filtrar(array, dado){
    vetorResultado = []
    
    array.forEach(element => {
        const result = String(element).length
        if(result == dado){
            vetorResultado.push(element)
        }
    });
    console.log(vetorResultado)
}

const vetor = [33, 59, 12, 100, 2000]
filtrar(vetor, 2)

console.log(vetor.toString())

