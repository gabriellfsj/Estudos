
const frutasBanca = (fruta) =>{
    switch (fruta) {
        case "maçã": console.log('Não vendemos essa fruta aqui!') 
            
            break;
        case 'kiwi': console.log('Estamos com escassez de Kiwi') 
            
        break;
        case 'melancia': console.log('Aqui está, são 3 reais o quilo') 
            
        break;
    
        default: console.log('Dado inválido!')
            break;
    }

}

frutasBanca('melancia')