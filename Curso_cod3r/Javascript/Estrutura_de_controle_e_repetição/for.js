let contador = 1

while(contador <= 10){
	console.log(contador)
	contador++

}

for(let i = 1; i <= 10; i++){
	console.log(`Com for : ${i}`)

}

const notas = [6.7, 8.0, 6.7, 5.5]

for(let i = 0; i < notas.length; i++){
	console.log(`Nota = ${notas[i]}`)
}


for(let i in notas){
	console.log(`${i} valores no for in ${notas[i]}`)
}

const pessoa = {
	nome: "Ana",
	sobrenome:"Silva",
	idade: 29,
	peso:64 
}

for( let atributo in pessoa){
	console.log(`${atributo} =  ${pessoa[atributo]}`)
}
