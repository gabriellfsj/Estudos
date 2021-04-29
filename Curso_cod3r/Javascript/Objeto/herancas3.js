const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filho1 = Object.create(pai)
filho1.nome = 'Gabriel'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'Divaldo', writable: false, enumerable:true}
})

console.log(filho2.nome)
filho2.nome = 'Lula' // não mudou porque o objeto filho2 esta com o nome writable false
console.log(`${filho2.nome} tem o cabela ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))
console.log(Object.keys(pai))

for (const key in filho2) {
    filho2.hasOwnProperty(key)?
    console.log(key): console.log(`Por herança: ${key}`)
        
    }
