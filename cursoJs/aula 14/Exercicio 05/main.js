var n = window.document.getElementById('txtn')
var tab = window.document.getElementById('seltab')
var ope = window.document.getElementById('op')
var value = ope.options[ope.selectedIndex].value


function calcular( ) {

    if (n.value.length == 0 ) {
        
        window.alert('Por favor, digite um número válido')
        
    }else if( ope.selectedIndex =='0'){

        
        let num = Number(n.value)
        tab.innerHTML = " " 
        for(let c = 1; c<=10; c++ ){

            let item = document.createElement('option')
            item.text = `${num} + ${c} = ${num+c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }

    }

    if( ope.selectedIndex =='1'){

        
        let num = Number(n.value)
        tab.innerHTML = " " 
        for(let c = 1; c<=10; c++ ){

            let item = document.createElement('option')
            item.text = `${num} - ${c} = ${num-c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
    
}

    if( ope.selectedIndex =='2'){

        
    let num = Number(n.value)
    tab.innerHTML = " " 
    for(let c = 1; c<=10; c++ ){

        let item = document.createElement('option')
        item.text = `${num} * ${c} = ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)

        }
    }

    if( ope.selectedIndex =='3'){

        
        let num = Number(n.value)
        tab.innerHTML = " " 
        for(let c = 1; c<=10; c++ ){

            let item = document.createElement('option')
            item.text = `${num} / ${c} = ${num/c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
    }
    
}