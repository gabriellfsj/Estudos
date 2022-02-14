// Formatando CPF

const retirarPontos = (cpf) => {
    console.log(`
    #### Retirando os pontos do CPF:
    ${cpf.replace(".","").replace(".","").replace("-","")}
    
    `)
}

retirarPontos("059.318.563-31")