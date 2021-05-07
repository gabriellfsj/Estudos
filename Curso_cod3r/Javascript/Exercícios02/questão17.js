function despesasTotais(itens) {
    var total = 0
    for (let item of itens)
    total += item.preco
    return console.log(total)
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ])
