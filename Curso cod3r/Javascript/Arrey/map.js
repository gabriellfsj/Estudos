// O map serve transforma um array em outro 
const numeros = [1,2,3,4,5]

// Map é um for com propósito

let resultado = numeros.map(function(e){
    return e * 2  // retornando o resultados do array numeros vezes 2 
})

console.log(resultado)

// Fazendo com arrow function
const som10 = numeros.map(e => e+10)

console.log(som10)

//Outro teste
const soma2 = e => e+2
const mult3 = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = numeros.map(soma2).map(mult3).map(paraDinheiro)
console.log(result)