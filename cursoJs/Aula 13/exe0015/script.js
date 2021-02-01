
var ano = window.document.getElementById('data')
var result = window.document.getElementById('resultado')
var sexo = window.document.getElementById('masculino')
var sexo2 = window.document.getElementById('feminino')
var ver = window.document.getElementById('botao')

function verificar(){

    var data = new Date()
    var sano = data.getFullYear()
   
    
    if (ano.value.lenght == 0 || ano.value > sano ) {
        
        window.alert('[ERRO]Data incorreta, por favor digite um valor válido.')

    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = sano - Number(ano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'redondo')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.jpg')
                //crianca

            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'garoto.jpg')
            }else if(idade < 70){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }else {
                //else
                img.setAttribute('src', 'idoso.jpg')
            }

        }else if(fsex[1].checked ){
            gênero = 'mulher'

        if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'menina2.jpg')

        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'garota.jpg')
        }else if(idade < 70){
            //adulto
            img.setAttribute('src', 'adulta2.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')

        }
    }
        result.style.textAlign = 'center'
        result.innerHTML = ` Detectamos ${gênero} com ${idade} anos.` 
        result.appendChild(img)
    }



}