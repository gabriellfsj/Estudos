// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'// Não faça isso em casa!!!
const avo ={ attr1:'A'}

const pai = { __proto__: avo, attr2:'B'}

const filho = { __proto__: pai, attr3:'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,//Sombreou o velMax de carro -- sobreescreveu 
    

}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo uma relação de prototipo ferrari vai erdar os valores de carro e volvo tambem
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

// Colocando valores na função acelerar que está dentre do objeto carro e que os objetos volvo e ferrari erdaram
volvo.acelerarMais(50)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())

