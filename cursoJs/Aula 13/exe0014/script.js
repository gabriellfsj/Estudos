
function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas`
    

        
    if ( hora >= 0 && hora < 12  ) {
        
        //bom dia!
        img.innerHTML = `<img class="manha" src="manha.jpg">`
        document.body.style.background = '#f2ed55' 

    } else if ( hora >= 12 && hora <= 18 ) {
        
        //boa tarde
        img.innerHTML = `<img class="manha" src="tarde.jpg">`
        document.body.style.background = '#f5bd45'
        
    } else{

        //boa noite
                img.innerHTML = `<img class="manha" src="noite2.jpg">`;
        document.body.style.background = '#0d1e4a'

    }


}

