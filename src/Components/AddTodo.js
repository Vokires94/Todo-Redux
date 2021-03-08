import React from 'react';
import { useState } from 'react';
import store from '../store';
import { addToDo } from '../Actions';

function AddTodo() {
    const [listdata, setList] = useState('');
    const addlistvalue = () => {
      if(listdata!=="") {
        store.dispatch(addToDo(listdata));
        setList('');
      }
        
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
      </div>
    );
  }

export default AddTodo;