function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco

}

console.log(produto.getPreco())

//Acessando no escopo global , só para testar:
global.preco = 20
global.desc = 0.1
console.log(getPreco())



// Usando o call para usar a função getPreco em qualquer objeto
const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))

// Usando applay para fazer a mesmo coisa que o call:

console.log(getPreco.apply(carro))

// Alterando o itens da função com o call:

console.log(getPreco.call(carro, 0.17, '$'))

// Alterando os intens da função usando o apply:

console.log(getPreco.apply(carro,[0.17, '$'])) // se coloca no array o valores para alterar