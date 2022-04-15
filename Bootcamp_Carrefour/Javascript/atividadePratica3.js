function validaArrey(arr, num){
   try{ if(!arr && !num) throw new ReferenceError("Envie os parâmetros")
    
    if(typeof arr !== 'object') throw new TypeError("O erro precisa ser um objeto")

    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number")

    if(arr.length !== num) throw new RangeError("Tamanho inválido!")
    
    return arr

}
   catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um referênce erro")
            console.log(e.message)
            
        }else if(e instanceof TypeError){
            console.log("Este erro é um typeErro")
            console.log(e.message)
        }else if( e instanceof RangeError){
            console.log("Este erro é um RangeErro!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado: " + e)
        }
   }
}

console.log(validaArrey([1,2,3,4,5],5))