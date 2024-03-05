import React from "react";
// Code Keypad Component Here

function Keypad (){
    
    function eventHandler(){
        return console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={eventHandler} type="password"  />
        </div>
    )
}

export default Keypad;