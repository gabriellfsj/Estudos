function criarProduto(nome,preco, desconto){
    /*this.nome = '...'
    this.preco = 123*/
    return{
        nome,
        preco,
        desconto,
        valor_do_desconto: preco * desconto,
        preco_com_desconto: preco - preco * desconto
    } 
    
}


console.log(criarProduto('carro', 30000, 0.1))
console.log(criarProduto('casa', 90000, 0.1))

