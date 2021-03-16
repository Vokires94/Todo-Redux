import {createStore} from "redux";
import combineReducers from "./reducers";
import { addLocal } from './Actions';


let store = createStore(combineReducers);
if(localStorage.user_list){
const user_list = JSON.parse( localStorage.user_list );
store.dispatch(addLocal(user_list));
}
store.subscribe(() => { localStorage.user_list = JSON.stringify(store.getState().todo);
    });
    
export default store;