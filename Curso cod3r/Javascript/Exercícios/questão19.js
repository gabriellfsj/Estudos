function menu(num, quantidade){
    switch (num) {
        case 100:
                console.log(`Você escolheu Cachorro quente, o valor do seu pedido foi ${quantidade * 3.0}R$`)           
            break;
        case 200:
            console.log(`Você escolheu Hambúrguer simples, o valor do seu pedido foi ${quantidade * 4}R$`) 
            break;
        case 300:
            console.log(`Você escolheu Cheeseburguer, o valor do seu pedido foi ${quantidade * 5.50}R$`) 
            break;
        case 400:
            console.log(`Você escolheu Bauru, o valor do seu pedido foi ${quantidade * 7.50}R$`) 
            break;
        case 500:
            console.log(`Você escolheu Refrigerante, o valor do seu pedido foi ${quantidade * 3.50}R$`) 
            break;
        case 600:
            console.log(`Você escolheu suco, o valor do seu pedido foi ${quantidade * 2.80}R$`) 
            break;
        
        default:
                console.log('Produto não existente')
            break;
    }
}

menu(100,2)
menu(200,3)
menu(300,1)
menu(400,5)
menu(500,3)
menu(600,1)
menu(700,1)