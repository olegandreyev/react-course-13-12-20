import React from 'react';
import { Container } from "semantic-ui-react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

function TodoControl() {
  return (
    <Container>
      <AddTodoForm />
      <TodoFilters />
      <TodoList />
    </Container>
  );
}

export default TodoControl;
