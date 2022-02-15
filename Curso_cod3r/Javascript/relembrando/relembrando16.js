const calcularMaior = (n1, n2, n3) =>{
    let maior
    if(n1>n2){
        maior = n1
    }else{
        maior = n2    
    }
    if(n3>maior){
        maior = n3
    }
    return maior
}

const calcularMenor = (n1, n2, n3) =>{
    let menor
    if(n1>n2){
        menor = n2
    }else{
        menor = n1    
    }
    if(n3<menor){
        menor = n3
    }
    return menor
}

const calcularMeio = (n1, n2, n3) =>{
    let maiorNumero = calcularMaior(n1, n2, n3)
    let menorNumero = calcularMenor(n1, n2, n3)
    let numeroMeio

    if(n1 != maiorNumero && n1 != menorNumero){
        numeroMeio = n1
    }if(n2 != maiorNumero && n2 != menorNumero){
        numeroMeio = n2    
    }if(n3 != maiorNumero && n3 != menorNumero){
        numeroMeio = n3
    }
    return console.log(numeroMeio); 
}

calcularMeio(1,3,4)