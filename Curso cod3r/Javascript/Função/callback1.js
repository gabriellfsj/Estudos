const fabricantes = ['Mercedes', 'Audi', 'BMW']

//Primeira forma:

for(let i in fabricantes){
    console.log(`No índice: ${i}, tem o item: ${fabricantes[i]}`)
}

//Segunda forma: 


const imprimir = (nome, indice) => {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach( fabricantes => console.log(fabricantes)) 