import React, { useState } from "react";

const Counter =(props) =>{
    const [conter1,setConter1] = useState(0);
    const [conter2,setConter2] = useState(0);
    const [conter3,setConter3] = useState(0);
    const handClick1 = () =>{
        setConter1(conter1+1)
    }
    const handClick2 = () =>{
        setConter2(conter2+2)
    }
    const handClick3 = () =>{
        setConter3(conter3+3)
    }
    const sum = conter1+conter2+conter3


    return <>
    <div>Sum All = {sum}</div> 
    <button onClick={handClick1}>Increment+1</button>
    <div>{conter1}</div>
    <button onClick={handClick2}>Increment+2 </button>
    <div>{conter2}</div>
    <button onClick={handClick3}>Increment+3 </button>
    <div>{conter3}</div>
    </>
}

export default Counter