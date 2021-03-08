export default function visibilityfilter (state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER' && action.payload) {
      return action.payload
    } else {
      return state
    }
  }