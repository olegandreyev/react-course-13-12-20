import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "../actions/todo";

const initialState = [];

const todoReducer = (state = initialState, action) => {
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

export default todoReducer;
