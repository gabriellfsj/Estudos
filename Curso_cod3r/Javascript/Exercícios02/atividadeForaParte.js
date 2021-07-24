const bancoDeDados = [
    {id: 11, nome: 'Gabriel', idade: 25, grupo: 'Programador', Status:''},
    {id: 55, nome: 'Megaman', idade: 20, grupo: 'Maverick hunter', Status:''},
    {id: 70, nome: 'Invecível', idade: 17, grupo: 'Heroi', Status:''},
    {id: 44, nome: 'Rochark', idade: 40, grupo: 'Detetive', Status:''},
    {id: 98, nome: 'Peralta', idade: 33, grupo: 'Policial', Status:''},
]

let buscador = (dado, vetor) => {
    const result = vetor.filter(a => a.nome.includes(dado))
    result.Status = 'ok'   
    console.log(result)
}

buscador('Gabriel', bancoDeDados)