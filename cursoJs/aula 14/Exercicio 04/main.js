
var i = window.document.getElementById('inc')
var f = window.document.getElementById('fim')
var p = window.document.getElementById('passo')
var con = window.document.getElementById('contando')


function contar() {

    var ic = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    if (i.value.length == 0 || f.value.length == 0 || passo == 0 && passo < 0 ) {
       
        window.alert('Erro! valores inválidos!')
        window.alert('Reveja o preenchimento dos campos')
        

    }
   else{
        if( ic < fim && passo > 0 ){
            for( let c = ic; c<=fim; c += passo){

                con.innerHTML += `${c} \u{1f449}`

   }
                 con.innerHTML += ` \u{1f3c1}`
   } else{

            for( let c = ic; c>=fim; c -= passo){

                con.innerHTML += `${c} \u{1f449}`



    }
        con.innerHTML += `\u{1f3c1}`

   }
    
    
} 
    
}

function limpar(){

    location.reload()    
    con.innerHTML = " "
   
} 