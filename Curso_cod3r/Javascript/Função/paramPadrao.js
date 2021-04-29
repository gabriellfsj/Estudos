//Estratégia 1 para gerar valor padrão

function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma(3,5,6), soma(2,3), soma(5), soma(0,0,0), soma())

// Estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c)? 1 : c

    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// Valor padrão de acordo com o ES2015 - Importante o jeito certo!

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))
