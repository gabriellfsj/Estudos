/** Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */
function multiplicacao(numero1, numero2){
    let total = 0 
    if(numero1 >= 0 && numero2 >=0){
        for (let i = 0; i < numero1 ; i++) {
               total = total + numero2
            
        }
        console.log(total)
    }else{
        console.log("Número inválido, digite valores positivos")
    }
}


multiplicacao(10, 50)
multiplicacao(1, 5)
multiplicacao(-10,50)
multiplicacao(0, 50)