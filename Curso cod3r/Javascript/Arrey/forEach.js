const aprovados = ['shingi', 'misato', 'adão', 'lilith']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

// outra forma de usar o foreach
aprovados.forEach(nome => console.log(nome))

// outra forma:
const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)

