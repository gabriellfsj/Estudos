function Counter(){
    
    let quantity = 10
    
    const up = () =>{
       quantity++ 
        document.getElementById("counter-box").innerHTML = quantity
       //console.log(quantity)
    }

    const down = () =>{
        quantity-- 
         document.getElementById("counter-box").innerHTML = quantity
        //console.log(quantity)
     }

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={up}>Aumentar</button>
            <button onClick={down}>Diminuir</button>
        </>
    )
}

export default Counter