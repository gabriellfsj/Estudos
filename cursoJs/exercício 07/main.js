var num = window.document.getElementById('txtn')
var sel = window.document.getElementById('seltab')

function adicionar(){
    
    Number(num.value)
    if (num.value.lenght == 0 || num.value <= 0 || num.value >100  ) {

            window.alert('Digite um valor válido!')

    }else {

        
            let item = document.createElement('option')
            item.text = `O valor digitado é : ${Number(num.value)}`
            sel.appendChild(item)
            var vet = []
            vet.length = 10
            
            
            /*
                var c = 0
                if(c<=vet.length){
                vet.push = Number(num.value)
                c++
            }
            
            for(let c = 0; c<vet.length; c++){
                vet[c] = Number(num.value)
                window.alert(vet)

            }*/

                        

    }
    
        window.alert(vet)

}

function calcular(){





}