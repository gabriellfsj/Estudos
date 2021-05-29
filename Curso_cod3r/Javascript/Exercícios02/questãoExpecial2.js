const pessoa = [
    {id: 11, nome: 'Gabriel', idade: 25, grupo: 'Programador'},
    {id: 55, nome: 'Megaman', idade: 20, grupo: 'Maverick hunter'},
    {id: 70, nome: 'Invecível', idade: 17, grupo: 'Heroi'},
    {id: 44, nome: 'Rochark', idade: 40, grupo: 'Detetive'},
    {id: 98, nome: 'Peralta', idade: 33, grupo: 'Policial'},
]

const filtrarUsuarios = (buscador, vetor) => {
    const result = vetor.filter(a => a.nome.includes(buscador))
    console.log(result)
  
}

const filtrarGrupo = (buscador, vetor) => {
    const result = vetor.filter(a => a.grupo.includes(buscador))
    console.log(result)
  
}

filtrarUsuarios('Peralta', pessoa)
filtrarGrupo('Programador', pessoa)
