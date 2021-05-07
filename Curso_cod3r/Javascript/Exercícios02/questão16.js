function somar(vetor){
    let soma = 0 
    vetor.forEach(element => {
        soma += element
    });
    console.log(soma)
}


vet = [1,2,3,4,5,6]
somar(vet)