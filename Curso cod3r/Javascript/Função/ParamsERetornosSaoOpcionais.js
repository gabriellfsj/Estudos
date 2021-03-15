function area (largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return console.log(area)
    }

}

area(2,5)
area(2)
area( )
area(2,3,4,5,10)
area(5,5)