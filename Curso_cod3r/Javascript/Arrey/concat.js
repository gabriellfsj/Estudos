// O concat irá concatenar os valores de um ou mais arrays em outro fazendo assim um super array com todos os resultados
const filhos = ['king kong', 'godzila']
const filhas = ['motra', 'hidra']

const todos = filhos.concat(filhas, 'fulanos')
console.log(todos)

console.log([].concat([1,2],[3,4], 5, [[6,7]]))