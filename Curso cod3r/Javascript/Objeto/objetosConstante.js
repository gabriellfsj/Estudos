// pessoa -> 123 -> {...}
const pessoa = {nome: 'joão claudio moreno'}
pessoa.nome = 'Dirceu Andrade'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa ={nome: 'Ana'} // erro
//console.log(nome)

Object.freeze(pessoa) // congela o objeto não se pode mais muda-lo

pessoa.nome = 'maria'
pessoa.endereco = 'Rua vera Jano'
delete pessoa.nome
console.log(pessoa.nome)

// Criar um objeto constante, que não pode ser mudado

const pessoaConstante = Object.freeze({nome: 'Marcos mion'})
pessoaConstante.nome = 'Goku'
console.log(pessoaConstante)