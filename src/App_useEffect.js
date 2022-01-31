import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';

function App_useEffect(params) {
    const [type,setType]=useState("users")
    const [data,setData]=useState([])
    const [pos,setPos]=useState({
        x:0,
        y:0
    })
    // useEffect(()=>{
    //     console.log("render")
    // })
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
        console.log(type) 
        return ()=>{
            console.log("Тут можно удалить к примеру обработчик какой-нибудьб который выполняется 1 раз")
        }
        
    },[type])

    const mouseMoveHandler = event=>{
        setPos({
            x:event.clientX,
            y:event.clientY
        })
    }

    useEffect(()=>{
        console.log("Component DidMount")
        window.addEventListener("mousemove", mouseMoveHandler)
        return window.removeEventListener("mousemove", mouseMoveHandler)
    },[])

    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={()=> setType("users")}>users</button> 
            <button onClick={()=> setType("todos")}>todos</button> 
            <button onClick={()=> setType("posts")}>posts</button> 
            {/* <pre>{JSON.stringify(data, null,2)}</pre> */}
            <pre>{JSON.stringify(pos, null,2)}</pre>
        </div>
    )
}

export default App_useEffect