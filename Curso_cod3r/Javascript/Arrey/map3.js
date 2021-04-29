// Como a função map é feita:
Array.prototype.map2 = function(callback){
    const newArrey = []
    for (let i = 0; i < this.length; i++) {
        newArrey.push(callback(this[i], i, this))

    }
    return newArrey
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
    
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)