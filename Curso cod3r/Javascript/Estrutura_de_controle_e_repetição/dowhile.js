function getint(min, max){
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor) 
}

let opc = 0 

do{
	opc = getint(-1,10)
	console.log(` O resultado escolhido radomicamente foi ${opc}`)

}while(opc != -1)

console.log(` Até a próxima`)

//única estrutura onde o calculo e feito no final 
