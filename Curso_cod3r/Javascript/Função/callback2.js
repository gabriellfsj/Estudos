const notas = [7.7, 6.5, 5.2,8.9,9.0,3.2]

//Primeira forma de achar os valores menores que 7 do Arrey:
for(let i in notas){
    if(notas[i]<7){
        console.log(`Os alunos que tiraram menos que 7 estão no indice ${i} com as notas ${notas[i]}`)
    }
}

// Segunda forma com callback:


notas.forEach(notas => {
    if(notas < 7){ console.log(`Os as notas menores que sete foram ${notas}`)}
})

// Terceira forma com callback aqui ele ira armazenar em um arrey apenas os valores menores que 7:

let notasBaixas = notas.filter(nota => {return nota<7})
console.log(notasBaixas)

let notasBaixas2 = notas.filter(nota => nota<7)
console.log(notasBaixas2)

// Usnado de forma elegante

const notasMenorQue7 = nota => nota < 7

console.log(notas.filter(notasMenorQue7))