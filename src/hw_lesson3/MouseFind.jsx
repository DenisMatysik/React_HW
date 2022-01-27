import React from "react"

const divInf = {
    height: "100px",
    background: "black",
    color: "white",
    width: "300px",
    padding: "50px"
}

function handleMove (event) {
    document.querySelector('.x').innerHTML = event.clientX;
    document.querySelector('.y').innerHTML = event.clientY
}

const MouseFind = () =>{
    return (
        <div>
        <div style={divInf} onMouseMove={handleMove}>
        move the mouse
        <div>
        X: <span className="x"></span>
        Y: <span className="y"></span>
        </div>   
        </div>
        </div>
    )
}

export default MouseFind