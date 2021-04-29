const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio retornar apenas verdadeiro ou false
const todosBolsistas = (resultado, bolsista) => resultado && bolsista == true
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas) )

// Desafio retorna os alunos bolsistas
const algumBolsista = (resultado, bolsista) => resultado || bolsista == true 
const resultado = alunos.map(b => b.bolsista).reduce(algumBolsista)
console.log(resultado)

