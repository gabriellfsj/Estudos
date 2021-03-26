import './index.css'
import React from "react"
import ReactDOM from 'react-dom'

import comParamentro from './components/comParamentro'
import Primeiro from './components/primeiro'


ReactDOM.render(
    <div>
        <comParamentro titulo="Esse é um título" subtitulo="Esse é o subtítulo"/>
        <Primeiro></Primeiro>
        
        

    </div>
    ,
    
    document.getElementById('root')

)
