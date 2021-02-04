var num = window.document.getElementById('txtn')
var sel = window.document.getElementById('seltab')
var res = window.document.getElementById('res')
var vet = []


function adicionar(){
    
    Number(num.value)
    if (num.value.lenght == 0 || num.value <= 0 || num.value >100  ) {

            window.alert('Digite um valor válido!')

    }else {

            vet.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `O valor adicionado é : ${Number(num.value)}`
            sel.appendChild(item)
               
                                  

    }
    
        
}

function calcular(){

        res.innerHTML=" "
        vet.push()
        let ultimo = vet[vet.length - 1]
        let primeiro = vet[0]
        
        res.innerHTML +=` O maior valor digitado foi: ${ultimo} </br>`

        res.innerHTML +=` O menor valor digitado foi: ${primeiro} </br>`

        res.innerHTML += ` A soma dos valores digitados é: ${vet.reduce(somar, 0)}</br>`

        res.innerHTML += ` A média dos valores digitados é: ${vet.reduce(somar, 0)/vet.length}</br>`

        res.innerHTML += ` A quantidades de valores adicionado é: ${vet.length}`





}

function somar(total, number) {
    return total + number
  }