function funaoDaSorte(numero){
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    if(numero === numeroAleatorio){
        console.log(`Parabéns o número sorteado foi ${numeroAleatorio} !`)
    }else{
        console.log(`Que pena o número sorteado foi ${numeroAleatorio}`)
    }
}

funaoDaSorte(10)