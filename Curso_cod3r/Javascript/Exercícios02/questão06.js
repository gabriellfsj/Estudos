function inverso(parametro){
    if(parametro === true){
        console.log(false)
    }else if(parametro === false){
        console.log(true)
    }else if( typeof parametro === 'number'){
        console.log(parametro*-1)
    }
    else{
        console.log(`O valor  digitado é: ${typeof parametro}. Porfavor digite um valor booleano ou numeral`)
    }
}

inverso(true)
inverso('6')
inverso(-2000)
inverso('programação')
inverso(10)