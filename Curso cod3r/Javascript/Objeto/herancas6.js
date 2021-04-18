//função construtora
function Aula(nome, videoD){
    this.nome = nome
    this.videoD = videoD
}

// Usando o new você cria um objeto a partir da função construtora:
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula ('Até Breve', 456)

console.log(aula1,aula2)

//Simulando o new

function novo(f, ...param){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,param)
    return obj
}

const aula3 = novo(Aula,'Bem vindo ', 1995)
const aula4 = novo(Aula,'Até Breve', 2001)

console.log(aula3, aula4)

