// Calculando a fórmula de bhaskara:

function bhaskara (ax2, bx, c) {
    let resultados = []
    // B ao quadrado menos 4 vezes A vezes c
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 

    // Mais ou menos raiz de Delta sobre duas vezes A/ sqrt é raiz quadrada.
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))