function contador(valor = []){
    let qtPar = 0
    let qtImpar = 0 
    for (let i = 0; i < valor.length; i++) {
        
        if(valor[i]%2 == 0){
            console.log(`O valor ${valor[i]} é um valor Par!`)
            qtPar++
            
        }
        if(valor[i]%2 !== 0){
            console.log(`O valor: ${valor[i]} é um valor Impar!`)
            qtImpar++
        }
        
        
                
    }
    console.log(`De acordo com os número digitados ${qtPar} são pares e ${qtImpar} são impares`)
}

let valot =[1,2,3,4]
contador(valot)