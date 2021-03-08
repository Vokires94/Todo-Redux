import {createStore} from "redux";
import combineReducers from "./Reducers"

let store = createStore(combineReducers);
store.subscribe(() => console.log(store.getState()));
export default store;