import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Input } from "semantic-ui-react";
import { addTodo } from "../redux/actions/todo-list";

function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const createTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <Container className='form-todo'>
      <Input value={title} onChange={e => setTitle(e.target.value)} />
      <Button style={{ marginLeft: 10 }} primary onClick={createTodo}>ADD TODO</Button>
    </Container>
  );
}

export default AddTodoForm;
