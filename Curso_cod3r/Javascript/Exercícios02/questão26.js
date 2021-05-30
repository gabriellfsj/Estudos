function inverter(objeto) {
     const paresDeChaveValorInvertidos = Object.entries(objeto)
     .map( parChaveValor => parChaveValor.reverse() )
     console.log(Object.fromEntries(paresDeChaveValorInvertidos))
     }

objeto = {a: 1, b: 2, c: 3}

inverter(objeto)