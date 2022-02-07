import { useState } from "react/cjs/react.development";
import React from 'react';



const styleItem = {
    position: "absolute",
    height:"max-content",
    width:"max-content",
    backgroundColor:"black",
    color:"white",
    textAlign: "center",
    padding:"5px"
}

const btnStyle = {
    height:"30px",
    width:"80px",
    backgroundColor:"black",
    color:"white",
    textAlign: "center",
    padding:"5px"
}

export default function FindItem() {
    const [cordX, setcordX] = useState(0);
    const [cordY, setcordY] = useState(0);

    const randomPos = ()=>{
        setTimeout(function(){
            setcordX(Math.random()*1000);
            setcordY(Math.random()*1000);
            document.getElementsByClassName("random-item")[0].style.left = cordX + "px";
            document.getElementsByClassName("random-item")[0].style.top = cordY + "px";},300)
    }

    // setTimeout работает не корректно

  return <div>
        <div style={styleItem} onMouseMove={randomPos} className='random-item' >
        X:{cordX}px | Y:{cordY}px
        </div>
        </div>
}

// // или
// const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
// const onMouseMove = e =>
// setCursorPosition({ top: Math.random()*1000, left:  Math.random()*1000 });

// <div onMouseMove={onMouseMove}  style={{position: 'absolute', ...cursorPosition }}>X:{cursorPosition.top}px | Y:{cursorPosition.left}px</div>