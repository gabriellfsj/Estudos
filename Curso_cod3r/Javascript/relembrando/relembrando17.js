const multiplicar = (vetor, numero)=>{
    let vet = []
    for (let i = 0; i < vetor.length; i++) {
        vet[i] = vetor[i]*numero
        
    }
    return console.log(vet);
}

const vetor = [1,2,3,4,5,6]
const numero = 5

multiplicar(vetor,numero);