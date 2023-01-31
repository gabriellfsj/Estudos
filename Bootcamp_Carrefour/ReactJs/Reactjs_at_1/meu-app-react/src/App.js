import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import BotaoAlert from "./BotaoAlert"

const sum = (a,b)=>{
  return (a+b)
}

const buttonA = <button> Histórico dos Clientes </button>
const buttonB = <button> Cadastro de Clientes</button>

const hasCustomer = true

const renderShowHistory = () =>{
  return( 
  <div> 
    Clique no Botão abaixo para  visualizar o Histórico dos clientes
    <br />
    {buttonA} 
  </div>
  )
}

const renderShowCadastro = () =>{
    return (
    <div> 
    Clique no Botão abaixo para  visualizar o Histórico dos clientes
    <br />
    {buttonB}
    </div>
  )
}

const showCostumer = () =>{
  if(!hasCustomer) return null
  return(
    <div>
      <h1>
        Nome do Cliente: Gabriel Francisco
      </h1>
    </div>
  )
}

console.log('hasCustomer', hasCustomer)


function primeiroJSX(){

  return(
    <div className="teste">
      Gabriel Francisco Souza de Jesus - Introdução ao ReactJs
      <h1> soma: {sum(10,20)}</h1>
   
    </div>
  )
}

function App(){



  const botaoAlert2 = (e)=>{
    alert('Teste dois')
}

  return (
    <div className="App">
      {primeiroJSX()}   
      {hasCustomer ? renderShowHistory() : renderShowCadastro()}
      <div>
        {showCostumer()}
      </div>
      <button onClick={()=>botaoAlert2()}>  botão teste 2 </button><br />
      <BotaoAlert></BotaoAlert>
    </div>
  );
}

export default App;
