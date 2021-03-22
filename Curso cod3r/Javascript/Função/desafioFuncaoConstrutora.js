function criarPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

console.log(criarPessoa('Gabriel', 'Francisco', 25))

const p1 = criarPessoa('Gabriel', 'Francisco', 25)
console.log(p1)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.idade)
p1.falar()
