// Arrow function

const soma = (a,b) => a+b
// ou 
const somar = (a,b) => { 
    return a+b
 } 
console.log(soma(5,5))
console.log(somar(4,4))

// Arrow function e 'this'

const lexico1 = () => console.log(this === exports)
lexico1()

// Parametro default

function log ( texto ='node'){
    console.log(texto)
}

log()

// Operador rest

function total ( ...numero){
    let total = 0 
    numero.forEach(n => {
        total += n        
    });
    return total
}

const vetor = [1,3,4,5,6]
console.log(total(vetor))


//