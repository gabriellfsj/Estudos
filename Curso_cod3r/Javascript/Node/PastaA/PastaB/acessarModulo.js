const moduloA = require('../../moduloA')
const _ = require('lodash')
const http = require('http')
const c = require('./PastaC')


console.log(moduloA.ola)
console.log(moduloA.bemvindo)

//Criando uma porta e mostrando algo nela, comente antes de rodar o cordigo!
http.createServer((req, res)=>{
    res.write('Bom dia')
    res.end()
}).listen(8080)

console.log(c.ola2)

