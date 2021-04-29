const escola = [ {
    nome: 'Turma M1',
    alunos:[{
        nome:'Mario',
        nota: 8.1
    },{
        nome: 'yoshi',
        nota: 9.3
    }]

},{
    nome: 'Turma M2',
    alunos:[{
        nome: 'Brownser',
        nota: 8.9
    },{
        nome:'Luigi',
        nota: 7.3
    }]
}]

const getNota = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this. map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)