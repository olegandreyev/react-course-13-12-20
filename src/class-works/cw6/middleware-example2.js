const { createStore, applyMiddleware } = require('redux');
const axios = require('axios');



const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch.bind(store), store.getState.bind(store));
  }
  return next(action);
};

const loggerMiddleware = store => next => action => {
  console.log('-------------------');
  console.log('prev state:', store.getState());
  console.log('action:', action);
  next(action);
  console.log('next state:', store.getState());
  console.log('-------------------')
};


const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING';
const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

const fetchProducts = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCT_PENDING
  });
  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response.data
      })
    })
    .catch(err => dispatch({
      type: FETCH_PRODUCT_ERROR,
      payload: err.message
    }))
};


const initialState = {
  list: [],
  loading: false,
  err: null,
};

const productsReducer = (state = initialState , action) => {
  switch(action.type) {
    case FETCH_PRODUCT_PENDING: return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS: return { loading: false, err: null, list: action.payload };
    case FETCH_PRODUCT_ERROR: return { ...state, loading: false, err: action.payload };
    default: return state;
  }
};

const store = createStore(
  productsReducer,
  applyMiddleware(
    asyncMiddleware, loggerMiddleware
  )
);

store.dispatch(fetchProducts());
