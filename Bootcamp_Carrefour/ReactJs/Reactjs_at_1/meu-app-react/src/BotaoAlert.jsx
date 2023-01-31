import React from "react";


const alerta = () => alert('botão OK')

function BotaoAlert (e) {
    return(
        <button onClick={() => alerta()}>
            Botão teste!
        </button>
    )
}

export default BotaoAlert