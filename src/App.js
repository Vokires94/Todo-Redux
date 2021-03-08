import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import Helpers from './components/Helpers';


function App() {
  return (
    <Provider store={store}>
        <div className="container">
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
