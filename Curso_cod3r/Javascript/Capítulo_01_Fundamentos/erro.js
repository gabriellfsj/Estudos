function tratarErroELancar(error){
    //throw new Error('Aconteceu o erro nessa parte reinicia o programa...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: error.nome,
        msg: error.massage,
        date: new Date

    }
}

function imprimirNomeGritado(obj){
    
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
    }
}

const obj = { nome:'Roberto'} // erro aqui entre name e nome 

imprimirNomeGritado(obj)