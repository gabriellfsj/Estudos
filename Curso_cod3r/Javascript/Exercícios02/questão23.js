function contadorCaractere(letra, [...frase]){
    let contador = 0 
    frase.forEach(element => {
        if(element === letra){
            contador++
        }
    });
    console.log(contador)
}

const frase = 'final fantasy e massa'

contadorCaractere('a', frase)