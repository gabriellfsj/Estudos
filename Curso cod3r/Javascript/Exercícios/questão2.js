
function triangulo (lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3){
        console.log("Esse triangulo é Equilatero ")
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3 ){
        console.log("Esse triagulo é Isóselis")

    }else{
        console.log("Esse triangulo é Escaleno")
    }

}

triangulo(5,5,5)
triangulo(5,1,5)
triangulo(1,2,3)