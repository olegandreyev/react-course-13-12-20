import {
  FETCH_POSTS_BY_TOPIC_ERROR,
  FETCH_POSTS_BY_TOPIC_PENDING,
  FETCH_POSTS_BY_TOPIC_SUCCESS,
  SELECT_TOPIC
} from "./actions";
import { combineReducers } from "redux";


function selectedTopicReducer(state = '', action) {
  if (action.type === SELECT_TOPIC) {
    return action.payload;
  }
  return state;
}

const initialState = {
  error: null,
  loading: false,
  list: []
};


function postsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS_BY_TOPIC_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_BY_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case FETCH_POSTS_BY_TOPIC_ERROR:
      return {
        ...state,
        loading:false,
        error: action.payload
      };
    default: return state;
  }
}

const topicPostsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS_BY_TOPIC_PENDING:
    case FETCH_POSTS_BY_TOPIC_SUCCESS:
    case FETCH_POSTS_BY_TOPIC_ERROR:
    return {
      ...state,
      [action.meta.topic]: postsReducer(state[action.meta.topic], action)
    };
    default: return state;
  }
};

const rootReducer = combineReducers({
  posts: topicPostsReducer,
  selectedTopic: selectedTopicReducer
});

export default rootReducer;
