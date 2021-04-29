let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // Para saber se uma variável é true ou false coloque na frente dela duas exclamações !! você estará negando duas vezes 

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || " "))// se apenas um resultado por verdadeiro o resultado total fica verdadeiro
console.log(('' || null || 0 || "epa"))// nesse caso mostrou epa, porque o epa é o único verdadeiro

let nome = ''

console.log(nome || 'desconhecido')



