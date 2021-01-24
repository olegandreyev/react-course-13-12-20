import React from 'react';
import { Container } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodo } from "../redux/actions/filter";

function TodoFilters() {

  const currentFilterValue = useSelector(state => state.todo.filter);
  const dispatch = useDispatch();

  return (
    <Container className='todo-filters'>
      <input
        type="text"
        placeholder='Filter'
        value={currentFilterValue}
        onChange={(e) => dispatch(filterTodo(e.target.value))} />
    </Container>
  );
}

export default TodoFilters;
