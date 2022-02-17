import React from 'react'
import { useSelector } from 'react-redux'

export default function Content() {
  const todoList = useSelector(state=> state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a,b)=> new Date(b.time) - new Date(a.time))

  return (
    <div>{sortedTodoList && sortedTodoList.length>0 ? ("todo will be here") : "no todo"}</div>
  )
}
