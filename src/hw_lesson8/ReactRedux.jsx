import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider, useDispatch } from 'react-redux';
import {  createStore } from 'redux';
import reducerGoals from './reducer';

export default function ReduxTest() { 
    let store = createStore(reducerGoals); 
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
        setInputInf("");
      }
      return ( <div>
          <input onChange={inputChange} placeholder='Add your new todo' type="text" value={inputInf}/>
          <button onClick={addGoalFunc} >Add todo</button>
      </div>
      )
    }
    const Todos = ()=>{
      const goals = useSelector(state=> state.goals); 
      const dispatch = useDispatch();
      const deleteGoal =(id)=>{dispatch({type:"REMOVE", payload:id});
      }
      const deleteAllGoals = ()=>{dispatch({type:"REMOVE_ALL", payload:null})
      }
      return <div>
        <ul>
        {goals.map(goal => <li key={goal.id} >{goal.goal} 
        <button onClick={()=>deleteGoal(goal.id)}>Delete</button>
        </li>)}
      </ul>
      <div>You have {goals.length} pending tasks
        <button onClick={deleteAllGoals}>Clear All</button>
      </div>
        </div>
    }

  return ( <div>
    <Provider store={store}>
      <h1>Todo App</h1>
      <TodoInput/>
      <Todos></Todos>
    </Provider>
    
  </div>
    
  )
}
