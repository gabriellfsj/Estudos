const Contador = (dado) =>{
   dado = 0
    while(dado<100){
        dado++
        if(dado%2 == 0){
            console.log(`Os números pares entre 1 e 100 são: ${dado}`)
        }
   } 
   
}

Contador()