const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Aqui foi feito um programa para filtrar uma mulher chineses que ganhasee menos dentro desse banco de dados 
// 1 - Foi exportados o banco de dados atraves da URL acima
// 2 - Foi exportada a biblioteca axios
// 3 - Foram criados três funções para fazer a busca: Uma para a nacionalidade, outras para saber o sexo e outra para descobrir o menor salário 
// 4 - Atravez do axios foi possivel pegar o arquivo Json da URL e colca-lo em um Vetor/Array no caso 'funcionarios'
// 5 - Depois foram usados os metodos Filter e reduce para descobrir a mulher chinesa de menor salário
// 6 - Os parametros usados no filter e reduce foram as três funções criadas 

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSlario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then( response =>{
    const funcionarios = response.data
    //------
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSlario)
    console.log(func)
 })



    



