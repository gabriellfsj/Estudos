function trabalhoCompras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(trabalhoCompras(true, true))
console.log(trabalhoCompras(true, false))
console.log(trabalhoCompras(false, true))
console.log(trabalhoCompras(false, false))