import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


const App = () => {
    
    return(
    <div className ="App">
        Hello World
    </div>
    )
}

const rootElement = decument.getElementById("root")
ReactDOM.render(<App />, rootElement )