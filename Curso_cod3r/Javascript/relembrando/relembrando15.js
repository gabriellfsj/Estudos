const calculadora = (numero1, numero2, op) => {

    switch (op) {
        case '+':
            console.log(`
                # A soma entre os números é: ${numero1 + numero2}
                
                `);
            break;
        case '-':
            console.log(`
                # A subtração entre os números é: ${numero1 - numero2}
                `);
            break;
        case '*':
            console.log(`
                # A multiplicação entre os números é: ${numero1 * numero2}
                `);
            break;
        case '/':
            console.log(`
                # A divisão entre os números é: ${numero1 / numero2}
                `);
            break;

        default: console.log("Digite uma informação válida!");
            break;
    }
}

calculadora(5,5,"+")
calculadora(5,5,"-")
calculadora(5,5,"*")
calculadora(5,5,"/")