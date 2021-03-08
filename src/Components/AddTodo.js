import React from 'react';
import { useState } from 'react';
import './AddTodo.css';
import store from '../store';
import { addToDo, cleanToDo } from '../actions';

function AddTodo() {
    const [listdata, setList] = useState('');
    const addlistvalue = () => {
      if(listdata!=="") {
        store.dispatch(addToDo(listdata));
        setList('');
      }
    }
      const cleanNotes = () => {
        store.dispatch(cleanToDo());
    }

    return (
      <div>
        <input
          className="inputfield"
          onChange={(e) => setList(e.target.value)}
          value={listdata}
          maxLength={35}
        />
        <button className="add-todo" onClick={addlistvalue}>
          Add Todo
        </button>
        <button className="clean-list" onClick={cleanNotes}>
          Clean all notes
        </button>
      </div>
    );
  }

export default AddTodo;