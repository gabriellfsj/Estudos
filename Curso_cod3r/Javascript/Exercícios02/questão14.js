function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return console.log(resultado)
}

obj1 = {
    nome:"Neon Genesis evangelion",
    data: 1996,
    nacionalidade: "Japão"
}

objetoParaArray(obj1)