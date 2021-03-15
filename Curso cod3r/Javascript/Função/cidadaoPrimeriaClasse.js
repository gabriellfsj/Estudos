// Função js é muito importante, precisa se conhecer profundamente 
// Função é um dado
// Higher-order function


// Criar uma função literal

function fun1(){ }

// Amazenar em uma variável

const fun2 = function(){ }

// Armazenar em um arrey

const fun3 = [function (a,b){return a+b}, fun1, fun2]
console.log(fun3[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Passar a função no parametro

function run(fun){
    fun()
}

run(function (){ console.log('Executando...')})

// Uma função pode retornar/conter uma função

function som (a,b){
    return function (c){
        console.log(a+b+c)
    }
}

som(2,3)(3)
const maisCinco = som(2,3)
maisCinco(4)
