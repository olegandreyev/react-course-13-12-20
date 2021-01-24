import { FILTER_TODO } from "../actions/filter";


const initialState = ''; // search filter;

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case FILTER_TODO: return action.payload;
    default: return state;
  }
}
