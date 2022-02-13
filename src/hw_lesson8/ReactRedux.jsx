import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider, useDispatch } from 'react-redux';
import { Reducer, createStore } from 'redux';
import reducerGoals from './reducer';

export default function ReduxTest() { 
    const [countGoals, setCountGolas] = useState(0);
    let store = createStore(reducerGoals);  
    const Todos = ()=>{
      const todos = useSelector(state=> state.todos);
      const dispatch = useDispatch();
      const deleteGoal =(id)=>dispatch({
          type: "REMOVE",
          payload: id
        });

    
      
      return <ul>
        {todos.map(todo => <li>{todo.goal}
        <button onClick={()=> deleteGoal(todo.id)} >Delete</button>
        </li>)}
      </ul>
    }

    const TodoInput = ()=>{
      const dispatch = useDispatch();
      const [inputInf, setInputInf] = useState("");
      const inputChange = (event)=>{
        setInputInf(event.target.value)
      }
      const addGoalFunc = ()=>{
        dispatch({
          type: "ADD",
          payload:{
            goal:inputInf,
            id: Math.ceil(Math.random()*100),
          }
        });
      }
      return ( <div>
          <input onChange={inputChange} placeholder='Add your new todo' type="text" value={inputInf}/>
          <button onClick={addGoalFunc} >Add todo</button>
      </div>
      )
    }

  return (
    <Provider store={store}>
      <h1>Todo App</h1>
      <TodoInput/>
      <Todos/>
      <div>You have {countGoals} pending tasks
        <button>Clear All</button>
      </div>
    </Provider>
  )
}
