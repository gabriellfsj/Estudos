const imprimirResultado = nota => {
    if(typeof nota === `number`){
        if(nota>=7){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
     }

    }else{
        console.log(`Coloque um valor válido!`)
    }
}

imprimirResultado(7)
imprimirResultado('epa')//cuidado tente evitar que isso aconteça