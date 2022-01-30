import React from 'react';
import { useState } from "react/cjs/react.development";

const divInf = {
    height: "100px",
    background: "black",
    color: "white",
    width: "300px",
    padding: "50px"
}

export default function MouseFind() {
    const [cordX, setcordX] = useState(0);
    const [cordY, setcordY] = useState(0);
    const handleMove = (event)=>{
        setcordX(event.clientX);
        setcordY(event.clientY);
    }
  return <div style={divInf} onMouseMove={handleMove}>
        move the mouse:
        <div>
        X: {cordX}
        Y: {cordY}
        </div>   
        </div>
}