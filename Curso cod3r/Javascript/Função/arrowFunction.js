let dobro = function (a){
    return 2 * a
}

let dobroArrow = (a) => {
    return 2 * a
}// Você pode tirar os parênteses quando tiver apenas um parêmetro e as chaves você quando você usar apenas uma linha.

//Versão reduzida :

let dobroArrowReduzido = a => 2 * a //tambem não precisa do return pois está implicito 


console.log(dobro(1))
console.log(dobroArrow(3))
console.log(dobroArrowReduzido(3))
console.log(dobroArrowReduzido(Math.PI))

// Ainda mais reduzido quando não tem parâmetros:

const ola = () => "Olá mundo!!"

console.log(ola())
