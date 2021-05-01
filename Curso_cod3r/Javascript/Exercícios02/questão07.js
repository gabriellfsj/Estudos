/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo*/

function estaEntre(numero, minimo, maximo, inclusivo){
    if(inclusivo === true){
        if(numero === minimo || numero === maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }else{
        if(numero > minimo && numero< maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }
    
}

estaEntre(60,50, 100)
estaEntre(10,50,100)
estaEntre(60,50,100, true)
estaEntre(60,60,100,true)
estaEntre(100, 60, 100, true)