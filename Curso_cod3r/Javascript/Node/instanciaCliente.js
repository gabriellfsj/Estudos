// Todas as informações que você muda em uma estancia ficam salvas na memória
// Quando se altera a instancia contadorA a contadorB tambem se altera
// Caso não queira que isso ocorra, você deve fazer como no arquivo instancia nova
// Os dados contadorC não foram alterados em contadorD 

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Você tem que colocar '()' depois de fazer o require da instancia, porque é uma função
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log('Contador B: '+ contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log('Contador D: '+ contadorD.valor)
console.log('Contador C: '+ contadorC.valor)



