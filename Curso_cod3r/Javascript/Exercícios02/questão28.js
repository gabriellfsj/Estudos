function inverter(objeto) {
        const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map( parChaveValor => parChaveValor.reverse() )
       return console.log( Object.fromEntries(paresDeChaveValorInvertidos))
}

const casa = {porta: 1, mesa : 2, tv: 4}

inverter(casa)

