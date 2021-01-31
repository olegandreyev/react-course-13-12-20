const { createStore, applyMiddleware } = require('redux');

const loggerMiddleware = store => next => action => {
  console.log('-------------------');
  console.log('prev state:', store.getState());
  console.log('action:', action);
  next(action);
  console.log('next state:', store.getState());
  console.log('-------------------')
};


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
});

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
};

const store = createStore(
  counterReducer,
  applyMiddleware(
    loggerMiddleware
  )
);


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
