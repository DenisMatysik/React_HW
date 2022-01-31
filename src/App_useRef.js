import React, {useState, useRef} from 'react';
import { useEffect } from 'react/cjs/react.development';



function App_useRef() {
    // const [renderCount,setrenderCount] = useState(1)
    const [value,setValue] = useState("initional")
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef("")

   useEffect(()=>{
    renderCount.current++;
    console.log(inputRef.current.value)
})

useEffect(()=>{
    prevValue.current = value
},[value])

    const focus = () => inputRef.current.focus()

    return (
      <div className="App">
        <h1>количество render {renderCount.current}</h1>
        <h2>Last state {prevValue.current}</h2>
        <input ref={inputRef} type="text" onChange={e=> setValue(e.target.value)} value={value}></input>
        <button onClick={focus}>Focus</button>
      </div>
    );
  }
  
  export default App_useRef;