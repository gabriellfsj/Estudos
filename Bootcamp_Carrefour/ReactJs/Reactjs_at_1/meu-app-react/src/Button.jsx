import React from "react";


function Button(props){
    const {name, onClick} = props
    return(
        <button>
            {name}
        </button>
    )
}


export default Button