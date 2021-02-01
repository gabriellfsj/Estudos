
let num = [1,5,6]
num[3] = 7
num.push(1)
num.sort()


for(let pos = 0; pos<num.length; pos ++ ){

        window.alert(`A posição ${pos} tem o valor ${num[pos]}`)

}

for(let pos in num){

    window.alert(`A posição ${pos} tem o valor ${num[pos]}`)

}

let a = num.indexOf(5)

window.alert(` O valor 5 está na posição ${a}`)
window.alert(num)
window.alert(`O vetor possui ${num.length} posições!`)
window.alert(`O segundo valor do vetor é ${num[1]}`)
