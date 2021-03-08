
export default function (state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER' && action.payload) {
      return action.payload
    } else {
      return state
    }
  }