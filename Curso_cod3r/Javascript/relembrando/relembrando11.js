// Desenvolver o código para saber se o ano digitado é bissexto 

const anoBissexto = (ano) =>{
    if(ano<=0){
        console.log("O ano não é bissexto");
    }else if(ano%4 == 0 ){
        console.log("O ano é bissexto");
    }else if(ano%400 == 0){
        console.log("O ano é bissexto");
    }else if(ano%100 == 0){
        console.log("O ano não é bissexto");
    }else{
        console.log("O ano não é bissexto");
    }
}

anoBissexto(2020);