import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'


export default function IfoodCounter() {

    const[value, setValue] = useState(1)
    const[buttonStyle, setButtonStyle] = useState('counter-button-minus-active')
    
    useEffect(()=>{
        document.getElementById('moeda').innerHTML = 2.00 * value
    },[value])

    useEffect(()=>{
        if(buttonStyle == 'counter-button-minus-desactive') alert('Você não pode diminuir para menos que zero')
    },[buttonStyle])


    const down = ()=>{
        if(value <= 0){
            setButtonStyle('counter-button-minus-desactive')
        }
        if(value>0){
        setValue(value-1)
        }
        
    }

    const up = ()=>{
        setValue(value+1)
        setButtonStyle('counter-button-minus-active')
    }


  
    return (

    <div className='countex-wrapper'>
    <button className={buttonStyle} onClick={down}>-</button>
    {value} 
    <button className='counter-button-plus-active' onClick={up}>+</button><br></br>
    <button id='moeda'> 12,00 </button>
    </div>
  )
}
