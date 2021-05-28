// let e const 

{
    var a = 1
    let b = 3
    const c = 10
    console.log(c)
}

console.log(a)

// Templete string

const produto = 'Ipad'
console.log(`${produto} é caro!
Muito mesmo !`)

// Destruturing

const [l, e, ...tras] = 'Cod3r'
console.log(l,e, tras)

const [x, y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {idade : 50, nome: "Gabriel"}
console.log(idade, nome)