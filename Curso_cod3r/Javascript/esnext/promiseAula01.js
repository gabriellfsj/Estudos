
let p = new Promise( (resolve, reject) => {
    resolve(['mega drive', 'super nintendo', 'playstation', 'xbox'])
})

p
    .then(res => res[0])
    .then(rest => rest[0])
    .then(letraMaiuscula => letraMaiuscula.toUpperCase())
    .then(result => console.log(result))