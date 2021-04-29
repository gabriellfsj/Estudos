//Armazenando uma função em uma variável

const impimirSoma = function (a,b){
    console.log(a+b)
}

impimirSoma(2,3)

// Armazenar uma função arrow em uma variável 

const soma = (a,b) => {
    return a+b

}

console.log(soma(5,5))

//Retorno implícito

const sub = (a,b) => a - b

console.log(sub(10,4))

const imprimir2 = a => console.log(a)

imprimir2('ola, mundo')