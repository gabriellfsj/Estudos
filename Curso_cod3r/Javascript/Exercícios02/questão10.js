/**Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function simboloMais(repeticao){
    let mais = ' '
    for (let i = 0; i < repeticao; i++) {
        mais = mais + '+'
        
    }
    console.log(mais)
}

simboloMais(1)
simboloMais(2)
simboloMais(3)
simboloMais(4)
