console.log(typeof Array, typeof new Array, typeof [] )

let aprovados = new Array('yanami', 'shinji', 'Asuka')
console.log(aprovados)

// notação literal:

aprovados = ['Misato', 'Adão', 'lilith']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'eva00'
aprovados.push('eva01')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'eva02'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// ordenar o array 
aprovados.sort()
console.log(aprovados)

// deletar um item do array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// Adicinoar elementos e remover com splice

aprovados.splice(2, 1)
console.log(aprovados)