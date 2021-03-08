
export default function(state =[], action) {
    switch (action.type) {
        case "ADD_TODO": {
            return state.concat([{ id: action.payload.id, text: action.payload.text, completed: false }]);
        }
        case "TOGGLE_TODO": {
            return state.map((todo, id) =>
        action.payload === id + 1
          ? { id: todo.id, text: todo.text, completed: !todo.completed }
          : todo
      )
        }
        default:
      return state
    }  
}