export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title
  }
});

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId
});

export const completeTodo = todoId => ({
  type: COMPLETE_TODO,
  payload: todoId
});
