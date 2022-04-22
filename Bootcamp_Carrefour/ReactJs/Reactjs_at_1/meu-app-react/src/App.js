import logo from './logo.svg';
import './App.css';
import Button from "./Button"

const sum = (a,b)=>{
  alert(a+b)
}

function primeiroJSX(){
  return(
    <div className="teste">
      Gabriel Francisco Souza de Jesus - Introdução ao ReactJs
      <h1> soma: {sum(10,20)}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {primeiroJSX()}   
      <Button onClick={()=>sum(10,20)} name="Gabriel Francisco"/>   
    </div>
  );
}

export default App;
