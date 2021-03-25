
const formatarValorDecimal = (valorDecimal) => {
    console.log( `
    ######## Convertendo o valor em Reais ########
    O valor convertido é : R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`)
    
}

formatarValorDecimal(0.1 + 0.2)