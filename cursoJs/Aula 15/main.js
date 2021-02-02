
let num = [1,5,6]
num[3] = 7 // para definir uma localização odne será colocado o número no vetor
num.push(1) // para colocar o numero desejado no final do vetor
num.sort() // para colocar o vetor em ordem alfabetica


for(let pos = 0; pos<num.length; pos ++ ){

        window.alert(`A posição ${pos} tem o valor ${num[pos]}`)

}

for(let pos in num) {

    window.alert(`A posição ${pos} tem o valor ${num[pos]}`)

}


let a = num.indexOf(5) // para saber a posição do valor digita

window.alert(` O valor 5 está na posição ${a}`)
window.alert(num)
window.alert(`O vetor possui ${num.length} posições!`)
window.alert(`O segundo valor do vetor é ${num[1]}`)
