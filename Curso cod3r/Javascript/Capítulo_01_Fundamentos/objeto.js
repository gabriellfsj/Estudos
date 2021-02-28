const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = '4998.90'
prod1['desconto legal'] = 0.04 // Evitar atribuir espaço

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 78.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2 

        }

    }
}

console.log(prod2)