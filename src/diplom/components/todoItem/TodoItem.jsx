import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import "./TodoItem.css"



export default function TodoItem({todo}) {
const deleteTodo =()=>{
    console.log("deleteTodo")
}
const editTodo =()=>{
    console.log("editTodo")
}
  return (
    <div className='item'>
        <div className='todoDetails'>
            []
            <div className='text'>
                <p className={"todoText" +" "+ todo.status}>{todo.title}</p>
                <p className="time">{todo.time}</p>
            </div>
        </div>
        <div className='todoActions'>
        <div className='icon'
        onClick={deleteTodo}
        role="button"
        tabIndex={0}>
            <MdEdit/>
            </div>
        <div className='icon'
        onClick={editTodo}
        role="button"
        tabIndex={0}>
            <MdDelete/>
        </div>
        </div>
    </div>
  )
}
