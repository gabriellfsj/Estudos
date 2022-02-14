// Código de soma, multiplicação, subtração, divisão

function operacao(a,b) {
    console.log(`
        #As operações feitas com os números digitados são:
        A soma com os números ${a} e ${b}
        Soma: ${a + b}
        Subtração: ${a - b}
        Multiplicação: ${a * b}
        Divisão: ${a / b}
    
    `)
 
}

const operacao2 = (a, b) => {
    console.log(`
    #As operações feitas com os números digitados são na função operação 2:
    A soma com os números ${a} e ${b}
    Divisão: ${a / b}
    Subtração: ${a - b}
    Multiplicação: ${a * b}
    Soma: ${a + b}

`)
}



operacao(10, 10);
operacao2(20,20);

