const quasearray = {0: 'mario world', 2: 'Castlevania', 3: 'Dark Souls'}
console.log(quasearray)

Object.defineProperty(quasearray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quasearray[0])

const meuArray = ['Maria World', 'Castlevania', 'Dark Souls']
console.log(quasearray.toString(), meuArray)