function esperarPor(tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout (() => resolve(), tempo)
    })
}

/* esperarPor(3000)
    .then(() => console.log('executando promise 1.....'))
    .then(esperarPor)
    .then(() => console.log('executando promise 2.....'))
    .then(esperarPor)
    .then(() => console.log('executando promise 3.....'))
 */

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}
async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor} ...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1} ...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2 } ...`)

    return valor + 3 
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()




/* function vogais(letras){
    let vetorVogais = []
    const vetor = letras.split()
    console.log(vetor)
    
    vetor.forEach(element => {
        if(element == 'a'){
            vetorVogais.push(element)
        }
    }); 
    //vetorVogais = vetor.filter(x => x.includes('a'))
    console.log(vetorVogais)
    
}

    const gabriel = 'gabriel'

vogais(gabriel) */