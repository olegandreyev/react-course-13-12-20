import axios from 'axios';
export const SELECT_TOPIC = 'SELECT_TOPIC';
export const FETCH_POSTS_BY_TOPIC_PENDING = 'FETCH_POSTS_BY_TOPIC_PENDING';
export const FETCH_POSTS_BY_TOPIC_SUCCESS = 'FETCH_POSTS_BY_TOPIC_SUCCESS';
export const FETCH_POSTS_BY_TOPIC_ERROR = 'FETCH_POSTS_BY_TOPIC_ERROR';


export const selectTopic = topic => ({
  type: SELECT_TOPIC,
  payload: topic
});

export const fetchPostsByTopic = topic => (dispatch, getState) => {
  const currentState = getState();
  if (currentState.posts[topic] && currentState.posts[topic].list.length > 0) return;
  dispatch({
    type: FETCH_POSTS_BY_TOPIC_PENDING,
    meta: {
      topic
    }
  });
  axios
    .get(`https://www.reddit.com/r/${topic}.json`)
    .then(response => {
      dispatch({
        type: FETCH_POSTS_BY_TOPIC_SUCCESS,
        payload: response.data.data.children.map(child => child.data),
        meta: {
          topic
        }
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_POSTS_BY_TOPIC_ERROR,
        payload: err.response.message,
        meta: {
          topic
        }
      })
    })
};
