import React from "react"
// Code EyesOnMe Component Here
function EyesOnMe(){

    function focusEventHandler(){
        return console.log('Good!')
    }
    function blurEventHandler(){
        return console.log('Hey! Eyes on me!')
    }


    return(
        <div>
            <button onFocus={focusEventHandler} onBlur={blurEventHandler}>Eyes on me</button>
        </div>
    )

}

export default EyesOnMe;