const { createStore, combineReducers } = require('redux');

// counter resources;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT
});

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
};

// TODO List resources;

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title
  }
});

const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId
});

const completeTodo = todoId => ({
  type: COMPLETE_TODO,
  payload: todoId
});

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: return [...state, {
      id: Math.random() + '',
      title: action.payload.title,
      completed: false
    }];
    case REMOVE_TODO: return state.filter(todoItem => todoItem.id !== action.payload);
    case COMPLETE_TODO: return state.map(todoItem =>
      todoItem.id === action.payload ? { ...todoItem, completed: true } : todoItem);
    default: return state;
  }
};


// Init store:
const store = createStore(
  combineReducers({
    todoList: todoReducer,
    counter: counterReducer
  })
);

store.subscribe(() => {
  console.log('----------------------');
  console.log(store.getState(), 'current state');
  console.log('----------------------');
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

store.dispatch(addTodo('Walk the dog'));
store.dispatch(addTodo('Eat my lunch'));
store.dispatch(addTodo('Have a good sleep!'));

const [ firstTodo, secondTodo ] = store.getState().todoList;

store.dispatch(removeTodo(firstTodo.id));
store.dispatch(completeTodo(secondTodo.id));



