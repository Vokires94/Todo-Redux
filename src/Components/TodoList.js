import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { toggleToDo } from '../Actions';

const mapStateToProps = state => {
    const { todo, visibilityfilter } = state;
    return { todo, visibilityfilter };
  };

const TodoList = (list) => {

    const toggleChecked = (id) => {
        store.dispatch(toggleToDo(id));
    }

    switch(list.visibilityfilter) {
        case "SHOW_ALL": {
            return(
                <ul className="todo-list">
                    {list.todo.length > 0 
                    ? list.todo.map((elem, index) => {
                        return <li key={`todo-${index}`} onClick={() => toggleChecked(elem.id)}>{!elem.completed ? "✔️" : "❌"}{" "}
                        <span style={!elem.completed ? {textDecoration: "none"} : {textDecoration: "line-through"}}>{elem.text}</span>
                        </li>;
                        })
                    : <li>Empty List!</li>
                    }
                </ul>
            )
        }
        case "SHOW_COMPLETED": {             
            const sortedlist = list.todo.filter((elem, index) => elem.completed);
            console.log(sortedlist);
            return(
                <ul className="todo-list">
                    {sortedlist.length > 0 
                    ? sortedlist.map((elem, index) => { 
                        return <li key={`todo-${index}`} onClick={() => toggleChecked(elem.id)}>{!elem.completed ? "✔️" : "❌"}{" "}
                        <span style={!elem.completed ? {textDecoration: "none"} : {textDecoration: "line-through"}}>{elem.text}</span>
                        </li>                        
                        })
                    : <li>No completed Tasks!</li>
                    }
                </ul>
            )
        }
        case "SHOW_INCOMPLETED": {
            const sortedlist = list.todo.filter((elem, index) => !elem.completed);
            console.log(sortedlist);
            return(
                <ul className="todo-list">
                    {sortedlist.length > 0 
                    ? sortedlist.map((elem, index) => { 
                        return <li key={`todo-${index}`} onClick={() => toggleChecked(elem.id)}>{!elem.completed ? "✔️" : "❌"}{" "}
                        <span style={!elem.completed ? {textDecoration: "none"} : {textDecoration: "line-through"}}>{elem.text}</span>
                        </li>                        
                        })
                    : <li>No completed Tasks!</li>
                    }
                </ul>
            )
        }
    }
    
};
   
export default connect(mapStateToProps)(TodoList);