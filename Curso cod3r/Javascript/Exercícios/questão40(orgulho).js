function notasConceito(vet){
    vet.forEach(notas => {
        if(notas>=0 && notas<=4.9){
            console.log(`${notas} = D`)
        }
        if(notas>=5 && notas<=6.9){
            console.log(`${notas} = C`)
        }
        if(notas>=7 && notas<=8.9){
            console.log(`${notas} = B`)
        }
        if(notas>=9 && notas<=10){
            console.log(`${notas} = A`)
        }

    });
}

const vet = [10,5,4,9,4,8,7.5,0,4.4,]

notasConceito(vet)

// Usei o forEach para percorre o vetor e atribuir condições e atribuir informações nos valores 