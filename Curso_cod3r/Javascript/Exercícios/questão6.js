const jurosSimples = (capitalinicial, taxajuros, aplicacao) =>{
    console.log(`
    ####### Juros Simples da aplicação #####
    Resultado: ${capitalinicial * taxajuros * aplicacao }

    `)

}

const jurosComposto = (capitalinicial, taxajuros,  aplicacao) =>{
    const comp = capitalinicial * (1 + taxajuros) ** aplicacao
    console.log(`
    ####### Juros Composto da aplicação #####
    Resultado: ${comp.toFixed(2)}
    
    `)
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)