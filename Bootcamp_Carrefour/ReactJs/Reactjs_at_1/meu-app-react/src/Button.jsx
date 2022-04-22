import React from "react";


function Button(props){
    const {name, onClick} = props
    return(
        <button onClick={onclick}>
            {name}
        </button>
    )
}


export default Button