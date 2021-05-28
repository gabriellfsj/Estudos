/* Usei reduce para encontrar o menor número dentro de um array, ele percorreu o array
    e usando uma callback fuction usou os dois parâmetros, sendo o 'a' o acumulador e o 'b'
    recebo os dados do vetor. Ele então compara 'a' com 'b', se 'a' for maior que 'b', 'a'
     recebe 'b'. motrando assim o menor valor dentro do vetor   
*/
const menorNumero = (vetor) => {
   const result =  vetor.reduce((a,b) => a > b ? a=b : a=a)
   console.log(result)
}


const vetor = [1,2,4,100,0.5,6,7,10] 
menorNumero(vetor)