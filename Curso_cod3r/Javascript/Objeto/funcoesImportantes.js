const pessoa={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Mostra as chaves de um objeto
console.log(Object.values(pessoa))//Mostra os valores de um objeto
console.log(Object.entries(pessoa))//Mostra todos os valores de um objeto dentro de arreys

//Percorre o objeto e mostra as chaves e valores dele
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)   
});

// OU

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`com destruturing = ${chave}: ${[valor]}`)   
});

// Define propriedades para o objeto dando assim mais controle sobre ele
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)
// Coloca todos os objetos que você quiser dentro de outro, os concatenando:

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)// Congela o objeto não permitindo altera-lo
obj.c = 1234
console.log(obj)

