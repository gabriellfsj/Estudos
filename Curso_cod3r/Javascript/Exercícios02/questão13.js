function numero(vetor){
    vetor2 = []
    vetor.forEach(element => {
        if(typeof element === 'number'){
            vetor2.push(element)
        }
    });
    console.log(`Os números presentes nesse vetor são: ${vetor2}`)
}

vett = ['gabriel', 'piaui', 10, 'brasil', 500, 1995]

numero(vett)