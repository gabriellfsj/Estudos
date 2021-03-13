function soNotaBoa(nota){
    if(nota>=7){ console.log(`O aluno está aprovado com a nota:${nota}`)}

}
function soNotaRuim(nota){ 
    if(nota<7){ console.log(`O aluno está reprovado com nota ${nota}`)}


}

function seForVerdade(valor){
    if(valor){
        console.log(`É verdade... ${ valor}`)
    }

}

nota = 7
soNotaBoa(nota)
soNotaRuim(nota)

//expressões falsas
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
//Expressões verdadeiras
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
