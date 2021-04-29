function calculadora (num1,num2,op){
    
    switch (op) {
        case '+':
            console.log(` A soma entre os valores é: ${num1 + num2}`)           
            break;
        case '-':
            console.log(` A subtração entre os valores é: ${num1 - num2}`)
            break;
        case '*':
            console.log(` A multiplicação entre os valores é: ${num1 * num2}`)
            break;
        case '/':
            console.log(` A divisão entre os valores é: ${num1/num2}`)
            break;
    
        default:
            console.log('Valores inválidos')
            break;
    }
}

calculadora(1,2,'+')
calculadora(1,2,'-')
calculadora(1,2,'*')
calculadora(1,2,'/')
calculadora(1,2,'u')