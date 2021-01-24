export const FILTER_TODO = 'FILTER_TODO';

export const filterTodo = str => ({
  type: FILTER_TODO,
  payload: str
});
