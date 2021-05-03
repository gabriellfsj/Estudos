function removerPropriedade(obj1, parametro){
   const copia = {...obj1}
    delete copia[parametro]
    return copia

}
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}

objj = {
    nome:'Gabriel',
    idade: 25,

    cidade: 'Parnaíba'
}

console.log(removerPropriedade(objj, 'idade'))
console.log(removerPropriedade(objj, 'nome'))
