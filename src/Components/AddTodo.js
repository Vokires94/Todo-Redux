import React from 'react';
import { useState } from 'react';
import './AddTodo.css';
import store from '../store';
import { addToDo, cleanToDo, cleanDoneNotes } from '../Actions';

function AddTodo() {
    const [listdata, setList] = useState('');

    function onEnterKeyPress(e){
      if (e.charCode === 13) {
        addlistvalue();
      }
    }

    const addlistvalue = () => {
      if(listdata!=="") {
        store.dispatch(addToDo(listdata));
        setList('');
      }
    }

      const cleanNotes = () => {
        store.dispatch(cleanToDo());
    }

    const cleanDone = () => {
      store.dispatch(cleanDoneNotes());
  }

    return (
      <div>
        <input
          className="inputfield"
          onChange={(e) => setList(e.target.value)}
          onKeyPress={(e) => onEnterKeyPress(e)}
          value={listdata}
          maxLength={35}
        />
        <button className="add-todo" onClick={addlistvalue}>
          Add Todo
        </button>
        <button className="clean-list" onClick={cleanNotes}>
          Clean all notes
        </button>
        <button className="clean-done_work" onClick={cleanDone}>
          Clean all done notes
        </button>
      </div>
    );
  }

export default AddTodo;