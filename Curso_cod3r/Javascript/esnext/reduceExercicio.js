produtos = [
    {
        nome: 'Notebook',
        preco: 2100
    },
    {
        nome: 'Processador',
        preco: 100

    },
    {
        nome: 'celular',
        preco: 400
    }
]

// O reduce vai selecionar uma parametro que você quer e tabalhar ele.

const total = produtos.reduce((a, b) => a += b.preco, 0)
console.log(total)


/*  Aqui estou usando map e reduce juntos, o map está selecioinanado o preco
    dentro do array produtos e multiplicando eles por 5, depois o reduce pegou esse
    resultado e somou todo dentra do parametro 'a' da calbeck function, dando assim o total */

const totalReal = produtos.map(p => p.preco * 5).reduce((a, b) => a += b, 0)
console.log(totalReal)

