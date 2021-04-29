const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
//pop remove o ultimo elemento do array
pilotos.pop()// Massa quebrou o carro!
console.log(pilotos)


// push adicinao um valor no array
pilotos.push('Verstappen')
console.log(pilotos)

// shift retira o primeiro elemento do vetor
pilotos.shift()// vettel removido
console.log(pilotos)

// unshift coloca um item no começo do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice para adicionar elementos

//Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa') // apartir do indice 2 você não vai apagar ninguem (0) e irá colocar esses dois valores
console.log(pilotos)

//Remover
pilotos.splice(3, 1) // Massa vai ser deletedo, pois foi escolhido 1 valor apartir do indice 3
console.log(pilotos)

// slice vai criar um no array, com os valores apartir do que você botou, no caso 2 
const algunsPilostos1 = pilotos.slice(2)// novo array
console.log(algunsPilostos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)