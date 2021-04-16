// Object.preventExtention
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag:'promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

// Ele mudou nome e excluiu tag, porém não colocou o parâmetro descrição

// OBject.seal
const pessoa ={nome:'shinji', idade:28}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'akame'
delete pessoa.nome
pessoa.idade = '1'
console.log(pessoa)

// A função seal sela o objeto, o nome não pode ser deletado nem pode colocar sobrenome, poderme s valores ja existentes podem ser alterados

//Object.freeze = selado  + valores constantes

