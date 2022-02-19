import {React,useState} from 'react'
import { MdDelete, MdEdit, MdDone } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import "./TodoItem.css"
import { deleteTodo } from '../redux/todoSlice'
import Modal from '../modal/Modal'

export default function TodoItem({todo}) {
const [updateModalOpen, setUpdateModalOpen] = useState(false)
const dispatch = useDispatch();
const deleteTask =()=>{
    dispatch(deleteTodo(todo.id));
}
const editTodo =()=>{
    setUpdateModalOpen(true);
}
  return (
      <>
    <div className='item'>
        <div className='todoDetails'>
        <div className='icon'
            // onClick={doneTodo}
            role="button"
            tabIndex={0}>
                <MdDone/>
                </div>
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
    <Modal type="update"
    todo={todo}
    modalOpen={updateModalOpen} 
    setModalOpen={setUpdateModalOpen}/>
    </>
  )
}
