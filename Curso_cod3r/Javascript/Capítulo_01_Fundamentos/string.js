const escola = "Cod3r"

console.log(escola.charAt(4)) // Me mostre o caracter dessa posição 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Mostre o falor na tabela asche da posição dessa letra 
console.log(escola.indexOf('o')) //Encontre a posição do indice dessa letra 

console.log(escola.substring(1))
console.log(escola.substring(0,3)) // vá do índice zero e me traga três caracteres 

//Três formas de concatenar :
console.log('Escola '.concat(escola).concat(' !'))
console.log(`Escola ${escola} ! `)

console.log(`Escola 
${escola} ! `) // A crase é usada em tamplete string

console.log('Escola '+escola+" !")

//Substituir caracteres:
console.log(escola.replace(3, 'e')) // subtitua o caractere da posição 3 por e 
console.log(escola.replace(/\d/,'e'))
console.log(escola.replace(/\w/g,'e'))

//Convertendo strings em arrey:
console.log('Maria, Ana, Pedro'.split(','))