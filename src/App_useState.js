import React, {useState} from 'react';


function App_useState() {
    const [count,setCount] = useState(0)

    function decrement  (){
        setCount(count+1)
    }

    function increment  (){
        setCount(count-1)
    }
    return (
      <div className="App">
        <h1>Count {count}</h1>
        <button onClick={decrement}>Add</button>
        <button onClick={increment}>Delete</button>
      </div>
    );
  }
  
  export default App_useState;