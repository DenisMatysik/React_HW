import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import "./TodoItem.css"
import { deleteTodo } from '../redux/todoSlice'
import toast from 'react-hot-toast'

export default function TodoItem({todo}) {
const dispatch = useDispatch();
const deleteTask =()=>{
    dispatch(deleteTodo(todo.id));
    toast.success("Todo was deleted")
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
            onClick={editTodo}
            role="button"
            tabIndex={0}>
                <MdEdit/>
                </div>
            <div className='icon'
            onClick={deleteTask}
            role="button"
            tabIndex={0}>
                <MdDelete/>
            </div>
        </div>
    </div>
  )
}
