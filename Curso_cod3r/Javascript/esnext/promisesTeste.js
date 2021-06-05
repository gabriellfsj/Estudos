const p = new Promise ((resolve, reject) =>{
    if(Math.random() > 0.5 ){
        resolve('yay')
    }
    reject('no')
})

p.catch(function err1(rej){console.log('Eu vou aparecer em todos os erros!')})

p
.then(function acao1 (res){ console.log('Deu tudo certo !'+ res)})
.catch(function erro (rej) { console.log('Deu errro!' + rej)})
