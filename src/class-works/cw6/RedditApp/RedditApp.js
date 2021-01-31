import React from 'react';
import { Provider } from 'react-redux';
import { Container } from "semantic-ui-react";
import createStore from './redux/createStore';
import RedditPosts from "./components/RedditPosts";
import TopicList from "./components/TopicList";

const store = createStore();

function RedditApp() {
  return (
    <Provider store={store}>
      <Container style={{ width: 300 }}>
          <TopicList />
          <RedditPosts />
      </Container>
    </Provider>
  );
}

export default RedditApp;
