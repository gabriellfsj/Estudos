// Lista de notação literal

const obj1 = {}
console.log(obj1)

// Object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){ 
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco *(1-desc)
    }
}

const p1 = new Produto ('caneta', 7.99, 0.15)
const p2 = new Produto ('notebook', 29998, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Marcos', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info" : "Sou um JSON ", "Teste" : "testando "}')
console.log(fromJSON)
console.log(fromJSON.info)
console.log(fromJSON.Teste)


