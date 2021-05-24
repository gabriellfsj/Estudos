function menorNumero(array){
    let numero = array[0] 
    for (const dados of array) {
       while (numero > dados) {
           numero = dados
       }
    }
    console.log(numero)
}

const vet = [1,0.5,2,3,50,4,5,6]
menorNumero(vet)