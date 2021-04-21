const produtos = [
    {nome: 'Notebook ', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil == true && p.preco >= 500
}))

// Outor modo de fazer 

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log( produtos.filter(caro).filter(fragil))

