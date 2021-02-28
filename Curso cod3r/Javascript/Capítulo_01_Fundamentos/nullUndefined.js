let valor //não inicalizada 
console.log(valor)

valor = null // definida como ausência da valor 
console.log(valor)
//console.log(valor.toString())//erro!


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 14

console.log(produto.preco)

produto.preco = undefined
console.log(!!produto.preco) 
//delete produto.preco 
console.log(produto)

produto.preco = null
console.log(!!produto)