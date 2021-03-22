const prod1 = {
    nome: '...',
    preco: 45,

}

const prod2 = {
    nome: '...',
    preco: 1240,
    
}

// Criando um função fectory para não precisa ficar criando um monte de objetos:

function criarPessoa(){
    return{
        nome: 'Silva',
        sobrenome:'Araujo'
    }
}

console.log(criarPessoa())