function getInt(min, max){
	const valor = Math.random() * (max-min) + min
	return Math.floor(valor)
}

let opcao = 0 

while(opcao != -1){
	opcao = getInt(-1, 10)
	console.log(`Opção escolhido randomicamente foi: ${opcao}`)
	
}

console.log("Até a próxima")
	



