import { createSlice } from '@reduxjs/toolkit'

const getInitialTodos=()=>{
    const localTodoList = window.localStorage.getItem("todoList");
    if (localTodoList){
        return JSON.parse(localTodoList)
    } window.localStorage.setItem("todoList", JSON.stringify([]));
    return [];
}

const initialState = {
    todoList: getInitialTodos()
}

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
      addTodo: (state,action)=>{
          const todoList= window.localStorage.getItem("todoList");
          state.todoList.push(action.payload);
         if(todoList) {
             const todoListArr = JSON.parse(todoList);
             todoListArr.push({...action.payload});
             window.localStorage.setItem("todoList", JSON.stringify(todoListArr))
         } else{
             window.localStorage.setItem("todoList", JSON.stringify([{...action.payload}]))
         }
      },
      deleteTodo: (state,action)=>{
        const todoList= window.localStorage.getItem("todoList");
        if (todoList) {
            const todoListArr = JSON.parse(todoList);
            todoListArr.forEach((todo,index) => {
                if (todo.id === action.payload){
                    todoListArr.splice(index,1)
                }
            });
            window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
            state.todoList = todoListArr;
        }
      },
      updateTodo: (state,action)=>{
        const todoList= window.localStorage.getItem("todoList"); 
        if (todoList){
            const todoListArr = JSON.parse(todoList);  
            todoListArr.forEach((todo) => {
                if (todo.id === action.payload.id){
                    todo.tittle = action.payload.tittle;
                    todo.status = action.payload.status;
                }
            }); 
            window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
            state.todoList = todoListArr; 
        } 
      }
  }
});

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer