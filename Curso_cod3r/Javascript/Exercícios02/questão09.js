/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(valor, repeticao){
    const vetor = []
    for (let i = 0; i < repeticao; i++) {
        vetor.push(valor)
        
    }
    console.log(vetor)
}

repetir(10,2)
repetir(5,5)