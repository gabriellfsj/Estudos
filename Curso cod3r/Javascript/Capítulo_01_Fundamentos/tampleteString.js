//Maneiras de concatenar:

const nome = 'Maria'
const concatenar = 'Olá '+ nome+'!'

const template =`
Olá
${nome}!` // O ` permite quebra de linha tab e outras alterações

console.log(concatenar, template)

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('presta atenção')}!`)

