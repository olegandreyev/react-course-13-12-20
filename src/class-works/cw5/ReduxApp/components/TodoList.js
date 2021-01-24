import React, { useMemo }  from 'react';
import { useSelector  } from 'react-redux';
import { List } from "semantic-ui-react";
import TodoItem from "./TodoItem";

function TodoList() {
  const { list, filter } = useSelector(state => state.todo);

  const filteredTodoList = useMemo(() => {
    return filter ? list.filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase())) : list;
  }, [list, filter]) ;

  return (
    <List divided relaxed>
      { filteredTodoList.length === 0 &&  <List.Item>No TODOs to show, please create one or remove the filter</List.Item> }
      { filteredTodoList.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem}/>) }
    </List>
  );
}

export default TodoList;
