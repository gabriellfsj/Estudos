import {useState} from 'react';


function SmartCounter(){
    // Retorna um vetor. 1 - sendo o vetor uma variável stateful. 2 - Função amarrada a essa variável que atualiza o valor
    const [quantity, contador] = useState(1)
    

    return(
        <>
        <h1>{quantity}</h1>
        <button onClick={()=>contador(quantity +1 )}> Aumentar </button>
        <button onClick={()=>contador(quantity -1 )}> Diminuir </button>
        </>
    )
}


export default SmartCounter