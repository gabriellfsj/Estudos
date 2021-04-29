const valores = [1, 1, 7.7, 8.8] // Array é uma estrutura indexada, você pode colocar vários valores, não via dar erro se você chamar uma posição não declarada
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // para colocar valores em um vetor já criado
console.log(valores[4])
console.log(valores.length) // Para mostrar a quantidade de itens no array/vetor

valores.push({id: 3}, false, null, "teste") // push adiciona vários valores dentro do array de uma vez 
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array
delete valores[0] // deleta uma valor expecífico do array
console.log(valores)

console.log(typeof valores)