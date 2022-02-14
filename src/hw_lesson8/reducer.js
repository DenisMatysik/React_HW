    
    const initialState = {goals:[]}
    const reducerGoals = ( state = initialState, action) =>{
    
      switch (action.type){
        case "ADD":{
          return {...state,goals:[...state.goals, action.payload]};
        }
        case "REMOVE":{
          return {...state,goals:[...state.goals.filter((goal) => goal.id!== action.payload)]};
        }
        case "REMOVE_ALL":{
          return {goals:[]}
        }
        default:
          return state;
      }
    }

    export default reducerGoals;