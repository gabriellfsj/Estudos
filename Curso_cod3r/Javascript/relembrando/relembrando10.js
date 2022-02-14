// Calcular se o número é divisível por 3 


const divisorTres = (numero) =>{
    if(numero%3 == 0 ){
        return console.log("O número é divisível por 3");
    }else{
        return console.log("O número não é divisível por 3 ")
    }
}

divisorTres(10);