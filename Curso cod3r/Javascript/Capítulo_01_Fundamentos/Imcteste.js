const calcularImc = (peso, altura) =>{ 

    let Imccalculo = Math.round(peso/(altura*altura))    
    console.log(`O Imc da pessoa que digitou é: ${Imccalculo}`)

    if(Imccalculo<18.5) {        
        console.log(`Seu Imc é ${Imccalculo} portanto você está abaixo do peso`)
         
    }if(Imccalculo>=18.5 && Imccalculo<=24.9){
        console.log(`Seu Imc é ${Imccalculo} portanto você está com o peso normal`)

    }if(Imccalculo>=25 && Imccalculo<=29.9){
        console.log(`Seu Imc é ${Imccalculo} portanto você está com sobrepeso`)

    }if(Imccalculo>=30 && Imccalculo<=34.9){
        console.log(`Seu Imc é ${Imccalculo} portanto você está com obesidade grau 1!`)

    }if(Imccalculo>=35 && Imccalculo<=39.9){
        console.log(`Seu Imc é ${Imccalculo} portanto você está com obesidade grau 2!`)
        
    }if(Imccalculo>=40){
        console.log(`Seu Imc é ${Imccalculo} portanto você está com obesidade grau 3!`)
        
    }else{
        console.log('Digite um valor válido!')
    }


}
    
calcularImc(120,1.70)
