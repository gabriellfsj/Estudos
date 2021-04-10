function calcularMaior(num1,num2,num3){
    let maior
    if(num1>num2){
        maior = num1
    }else{
        maior = num2
    }
    if(num3>maior){
        maior = num3
    }
    return maior
}

function calcularMenor (n1,n2,n3){
    let numeromenor = n1
    
    if(n2<numeromenor){
        numeromenor = n2
    }
    if(n3<numeromenor){
        numeromenor = n3
    }
    return numeromenor
}

function calcularMeio(n1,n2,n3){
    let numeroMaior = calcularMaior(n1,n2,n3)
    let numeroMenor = calcularMenor(n1,n2,n3)
    let numeroMeio
    if((n1 != numeroMaior) && (n1 != numeroMenor)){
        numeroMeio = n1
    }
    if((n2 != numeroMaior) && (n2 != numeroMenor)){
        numeroMeio = n2
    }
    if((n3 != numeroMaior) && (n3 != numeroMenor)){
        numeroMeio = n3
    }    
    return numeroMeio
}

function media(dado,n1,n2,n3){
    let maior = calcularMaior(n1,n2,n3)
    let menor = calcularMenor(n1,n2,n3)
    let meio = calcularMeio(n1,n2,n3)

    let mediaPonderada = ((maior * 4) + (menor * 3) + (meio * 3)) / (4 + 3 + 3)

    return console.log(dado, mediaPonderada)
            
}

console.group(`Maior numero: ${calcularMaior(10,5,3)}`)
console.log(`Numero do meio:${calcularMeio(10,5,3)}`)
console.log(`Menor número:${calcularMenor(10,5,3)}`)
media('Gabriel', 10, 9 , 8)

// Êba!!! fiz sozinho !!!
    


