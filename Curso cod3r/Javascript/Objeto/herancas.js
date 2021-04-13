const ferrari = {
    modelo: 'f40',
    velMax: 340
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}


console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)