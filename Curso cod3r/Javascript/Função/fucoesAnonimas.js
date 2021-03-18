const soma = (x,y) => x + y

const imprmirResultado = (a,b,operacao = soma) => console.log(operacao(a,b))

imprmirResultado(3,4)
imprmirResultado(3,4, soma)
imprmirResultado(3,4, (x,y) =>  x - y)
imprmirResultado(3,4, (x,y) => x * y)

const pessoa = {

    falar: () => console.log("ola")
}

pessoa.falar()
