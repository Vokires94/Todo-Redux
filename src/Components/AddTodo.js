import React from 'react';
import { useState } from 'react';
import store from '../store';
import { addToDo, cleanToDo } from '../Actions';

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
          onChange={(e) => setList(e.target.value)}
          value={listdata}
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