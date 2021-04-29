function contador(valor=[]){
    let qtDentro = 0
    let qtFora = 0
    for (let i = 0; i < valor.length; i++) {
        if(valor[i] >= 10 && valor[i]<=20){
            console.log(`O Valor ${valor[i]} está entre 10 e 20`)
            qtDentro++
        }else{
            console.log(`O valor ${valor[i]} não está entre 10 e 20`)
            qtFora++
        }
        
    }
        console.log(`Existem ${qtDentro} valores entre 10 e 20 e existem ${qtFora} fora de 10 e 20 `)
}

vet = [3,1,6,11,15,16,20,30]
contador(vet)