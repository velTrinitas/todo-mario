import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import "./Index.css";

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
  });


function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };
  
    return (
      <>
        <select className="form-input" value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </select>

      </>
    );
  }

  export default TodoListFilters;