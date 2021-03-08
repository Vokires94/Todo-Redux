import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import VisibilityFilters from './Components/VisibilityFilters';
import Helpers from './Components/Helpers';


function App() {
  return (
    <Provider store={store}>
        <div>
            <h2>ToDo List</h2>
            <AddTodo/>
            <TodoList/>
            <VisibilityFilters/>
            <Helpers/>
        </div>
    </Provider>
  );
}

export default App;
