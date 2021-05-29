// usado para percorre elementos de um vetor e mostra-los 


for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntoEcma = ['map', 'set', 'Promise']

for (let i in assuntoEcma){
    console.log(i)
}

for(let assunto of assuntoEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map',{abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (const assunto of assuntoMap) {
    console.log(assunto)
}

for (const chave of assuntoMap.keys()) {
    console.log(chave)
    
}

for (const valor of assuntoMap.values()) {
    console.log(valor)
    
}

for (const [ch,vl] of assuntoMap.entries()) {
    console.log(ch,vl)
    
}

