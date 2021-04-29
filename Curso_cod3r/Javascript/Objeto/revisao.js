const produto = new Object

produto.nome = 'Celular'
produto ['Marca do produto'] = ['Generica']
produto.preco = 1.500

console.log(produto)

const carro = {
    modelo:'A4',
    valor: 8900,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua Abc',
            numero:123
        }

    },
    condutores:[{
        nome: 'Fabio porchat',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42,
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

//console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)