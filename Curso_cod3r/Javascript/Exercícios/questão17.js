const salario = (tipo, salario) =>{
    switch (tipo) {
        case 'a': console.log((salario * 0.1) + salario)
            
            break;
        case 'b': console.log((salario * 0.15) + salario)
            
            break;
        case 'c': console.log((salario * 0.2) + salario)
            
            break;
    
        default: console.log("Valor inválido")
            break;
    }

}

salario('c',1000)