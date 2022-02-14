// Formatando valores 

const formatarParaDecimal = (numeroDecimal)=>{
    console.log(`
    #### Convertendo o valor em Reais####
    O valor convertido é: R$ ${numeroDecimal.toFixed(2).toString().replace(".",",")}

    
    `)
}

formatarParaDecimal(2.5 + 5.5)