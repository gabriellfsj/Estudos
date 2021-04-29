console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
module.exports.publico =  true // ou assim : module.exports = {publico: true}

exports= null
console.log(module.exports)

//Forma errada:
exports = {
    nome: 'teste'
}
//Não irá aparecer
console.log(module.exports)

