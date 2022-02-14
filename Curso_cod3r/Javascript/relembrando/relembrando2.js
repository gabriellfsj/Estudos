// Exercício para saber que tipo de triângulo é


const triangulo = (n1, n2, n3) => { 
    if(n1 == n2 && n2 == n3){
        console.log("O Triângulo digitado é um Equilátero!")
    } else if(n1 == n2 || n2 == n3 || n3 == n1){
        console.log("O Triângulo digitado é um Isóselis")
    } else{
        console.log("O Triângulo digitado é um Escaleno")
    }

}

triangulo(10,10,10)
triangulo(10,1,10)
triangulo(10,9,8)