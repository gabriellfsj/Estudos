// Criando uma promise

const p = new Promise((resolve, reject) =>{
    try{
        resolver (funcaoX())
    }catch(e){
        reject(e)
    }
})


// Executando a Promise

p
.then((parametros) => /* sucesso */)
.catch((erro) => /* erro */)
// Tratando erros e sucessos com then
.then(resposta => { /* tratar resposta */ }, erro => { /* tratar erro */ })

