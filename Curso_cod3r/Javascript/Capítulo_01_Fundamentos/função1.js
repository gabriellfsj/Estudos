// Função é um bloco de código que será executado e você poderá usar em várias situações MUITO IMPORTANTE!
//'a' e 'b' são variáveis criadas para a função
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(9)
imprimirSoma(5,3,6,7,2,1,54)// ele ignora os outros números digitados 
imprimirSoma()

//Função com retorno

function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3)) // ele substituiu o 1 de 'b' pelo 3 
soma(2,3)
console.log(soma(1)) // 'a' recebeu o valor e somou com a valor ja definido em 'b'