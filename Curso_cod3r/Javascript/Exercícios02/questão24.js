/* O método 'includes' irá verificar se a expressão buscada existe
 no array e retornará true se sim e false se não*/

 function buscarPalavraSemelhante(palavraBuscar, [...array]){
    let recepitor = []
    array.forEach(element => {
        if(element.includes(palavraBuscar)){
            recepitor.push(element)
            
        }
    });
    console.log(recepitor)
}

const array = ['Computador', 'notebook', 'Caderno']

buscarPalavraSemelhante('no',array)


//Outra formade fazer:

function buscarP (palavra, vetor){
    const result = vetor.filter(a => a.includes(palavra) )
    console.log(result)
}

buscarP('no', array)