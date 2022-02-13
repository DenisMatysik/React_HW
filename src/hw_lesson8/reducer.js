    const initialState = {todos:[]}
    const reducerGoals = ( state = initialState, action) =>{
      switch (action.type){
        case "ADD":{
          return {...state,todos:[...state.todos, action.payload]};
        }
        case "REMOVE":{
          return {...state,todos:[...state.todos.filter((todo) => todo.id!== action.payload)]};
        }
        default:
          return state;
      }
    }

    export default reducerGoals;