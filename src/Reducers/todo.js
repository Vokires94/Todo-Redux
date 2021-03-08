export default function todo(state =[], action) {
    switch (action.type) {
        case "ADD_TODO": {
            return state.concat([{ id: action.payload.id, text: action.payload.text, completed: false }]);
        }
        case "TOGGLE_TODO": {
            return state.map((todo) =>
        action.payload === todo.id
          ? { id: todo.id, text: todo.text, completed: !todo.completed }
          : todo
        )
        }
        case "ADD_LOCAL": {
            return action.payload.slice();            
        }
        case "CLEAN_NOTES": {
          return [];
        }
        default:
      return state
    }  
}