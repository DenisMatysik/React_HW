import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem/TodoItem';

export default function Content() {
  const todoList = useSelector(state=> state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a,b)=> new Date(b.time) - new Date(a.time))

  return (
    <div>{sortedTodoList && sortedTodoList.length>0 ? (sortedTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo}/>)) : "no todo"}</div>
  )
}
