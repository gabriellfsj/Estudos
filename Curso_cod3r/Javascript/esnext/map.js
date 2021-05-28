const tecnologias = new Map()
tecnologias.set("react", { framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log( tecnologias.get('react'), framework)

const chavesVariadas  = new Map([
    [function (){ }, 'função'],
    [{}, 'Objeto'],
    [123, 'Números'],
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})

