produtos = [
    {
        nome: 'Notebook',
        preco: 2100
    },
    {
        nome: 'celular',
        preco: 400
    }
]

const multiplicadorPreco = produtos.map(p => p.preco * 4)

console.log(multiplicadorPreco)
console.log(produtos)

// O map percorreu o array Produtos e atravez da função callback , selecionou apenas os preços e multiplicou por 4