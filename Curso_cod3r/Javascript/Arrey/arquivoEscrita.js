const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    deconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.js', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})