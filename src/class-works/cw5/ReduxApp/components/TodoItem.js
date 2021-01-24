import React from 'react';
import { useDispatch  } from 'react-redux'
import { Icon, List } from "semantic-ui-react";
import { completeTodo, removeTodo } from "../redux/actions/todo";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <List.Item>
      { todo.completed && <List.Icon name='checkmark' verticalAlign='middle'/> }
      <List.Content>
        <List.Header>
          <span style={{ marginRight: 25 }} onClick={() => dispatch(completeTodo(todo.id))}>{todo.title}</span>
          <Icon onClick={() => dispatch(removeTodo(todo.id))} name='trash alternate' verticalAlign='middle' color='black' /></List.Header>
      </List.Content>
    </List.Item>
  );
}

export default TodoItem;
