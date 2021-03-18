
const trut = (mud) => {

mud = document.getElementById('dados')
mud.textContent = "Alteração feita com sucesso"

}


let alt = document.getElementById('dados')
alt.textContent = 'Dados alterados ao clicar'

const refresh = () => {
     location.reload()
} 

const bot = (hi, inf) => {
    hi = document.getElementById('botao') 
    inf = window.prompt('Modifique o botão com o valor que quiser')
    hi.textContent = inf
}


bot()