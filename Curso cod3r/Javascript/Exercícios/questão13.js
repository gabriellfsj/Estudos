
const diaUtil = (dia) =>{
    switch (dia) {
        case 1: console.log('Hoje é Domingo, Final de semana!') 
            
            break;
        case 2: case 3: case 4: case 5: case 6: console.log('Hoje é Dia Útil!') 
            
        break;
        case 7: console.log('Hoje é Sábado, Final de semana!') 
            
        break;
    
        default: console.log('Data invalida!')
            break;
    }

}

diaUtil(3)