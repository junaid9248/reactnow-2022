import React from "react";

function Incbutton(){

    let count=0;

    const increment= () =>{
        count+=count;
    };
    return(
        <div>
            {console.log(count)}
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Incbutton;