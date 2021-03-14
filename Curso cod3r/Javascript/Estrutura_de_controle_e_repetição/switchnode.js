const imprimirNota = function (nota){
	switch(Math.floor(nota)){
		case 10: case 9:
			console.log(`Quadro de Honra`)
			break
		case 8: case 7:
			console.log(`Aprovados`)
			break
		case 6: case 5: case 4:
			console.log(`Recuperação`)
			break
		case 3: case 2: case 1: case 0:
			console.log(`Reprovados`)
			break
		default:
			console.log(`Nota inválida`)
							
		
	}
}

imprimirNota(10)sdfsfsfssdsdfsdf
imprimirNota(8)
imprimirNota(4)
imprimirNota(1)
imprimirNota(9.5)sasdflsdf klsdflk
