const alunos = [
    { nome: 'shinji', nota: 7.9},
    {nome: 'Misato', nota: 9.2}
]

// Obordagem imperativa 

let total1 = 0 
for(let i = 0 ; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Abordage declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const resultado2 = alunos.map(getNota).reduce(soma)
console.log(resultado2/alunos.length)

