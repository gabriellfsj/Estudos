// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'Rua ABC',
        numero: 1000

    }
}
// Aqui esta sendo retirado os dados do objeto podendo assim ser usado, tanto com o nomes deles, quanto criando variáveis para coloca-los

// È uma alternativa para o ex: pessoa.nome

const {nome, idade} = pessoa
console.log(nome , idade)

const { nome: n , idade: i} = pessoa
console.log(n, i )

const{ endereco: {logradouro, numero }} =  pessoa
console.log(logradouro, numero)

const { endereco:{logradouro: logr, numero: nume}} = pessoa
console.log(logr, nume)