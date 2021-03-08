import React from 'react';
import './VisibilityFilters.css'
import store from '../store';
import { setFilter } from '../actions';

const VisibilityFilters = () => {

    const changeFilter = (filter) => {
        store.dispatch(setFilter(filter));
    }

    return (
      <div className="visibility-filters">        
            <span onClick={() => changeFilter("SHOW_ALL")}>All</span>{" "}
            <span onClick={() => changeFilter("SHOW_COMPLETED")}>Completed</span>{" "}
            <span onClick={() => changeFilter("SHOW_INCOMPLETED")}>Incompleted</span>
      </div>
    );
  };

  export default VisibilityFilters;