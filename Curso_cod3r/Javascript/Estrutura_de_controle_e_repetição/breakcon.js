const num = [1,2,3,4,5,6,7]

for (let x in num){
	if(x == 5){
		break
	}
	console.log(`${x} = ${num[x]}`)
	
}

for (let y in num){
	if(y == 5){
		continue
	}
	console.log(`${y} = ${num[y]}`)
}//o continue pulou o cinco e foi para os próximos números

externo:for(let a in num){
		for(let b in num){
			if(a == 2 && b ==3) break externo
				console.log(`Par = ${a}, ${b}`)
			
		}
	
	}
