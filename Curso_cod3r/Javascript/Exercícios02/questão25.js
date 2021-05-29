function removerVogais(vetor){
    const consoante = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', '']
    consoante.forEach(a => vetor = vetor.replace(a, ''))
    console.log(vetor)
}


const vetor  = 'fantasy'
removerVogais(vetor)