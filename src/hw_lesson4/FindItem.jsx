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
    const [cordX, setcordX] = useState(300);
    const [cordY, setcordY] = useState(300);

    const randomPos = ()=>{
        setTimeout(function(){
            setcordX(Math.random()*1000);
            setcordY(Math.random()*1000);
            document.getElementsByClassName("random-item")[0].style.left = cordX + "px";
            document.getElementsByClassName("random-item")[0].style.top = cordY + "px";},300)
    }

    const changePosition = ()=>{
        // document.getElementsByClassName("random-item")[0].removeEventListener("mousemove",randomPos)
        console.log("click")
    }

  return <div>
        <div style={styleItem} onMouseMove={randomPos} onClick={changePosition} className='random-item' >
        X:{cordX}px | Y:{cordY}px
        </div>
        </div>
}
