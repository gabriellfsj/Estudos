const areaTerreno = ( larguraTerreno, profundidadeTerreno) =>{
    return larguraTerreno * profundidadeTerreno
} 

const areaGaragem = (larguraGaragem, profundidadeGaragem) => {
    return larguraGaragem * profundidadeGaragem
}

const percentualOcupacao = (terreno, garagem, zona) => {
    let percentualDeOcupacao = (terreno/garagem) * 100
   
    if(zona === 'norte' && percentualDeOcupacao <= 25){
        console.log(`Sua casa possui o percentual de ocupação ${percentualDeOcupacao.toFixed(2)} e está dentro do permitido para a sua zona`)
    }else if((zona === 'oeste' || zona === 'leste') && percentualDeOcupacao <= 30){
        console.log(`Sua casa possui o percentual de ocupação ${percentualDeOcupacao.toFixed(2)} e está dentro do permitido para a sua zona`)
    }else if(zona === 'sul' && percentualDeOcupacao <=40){
        console.log(`Sua casa possui o percentual de ocupação ${percentualDeOcupacao.toFixed(2)} e está dentro do permitido para a sua zona`)
    } else{
        console.log(`Seu percentual de ocupação é ${percentualDeOcupacao.toFixed(2)} e não está permitido dentro da sua zona `)
    }

  
}

const terreno = areaTerreno(30, 20)
const garagem = areaGaragem(40, 40)
percentualOcupacao(terreno, garagem, 'sul')
