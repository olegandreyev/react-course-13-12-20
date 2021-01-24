import React from 'react';
import { Provider } from 'react-redux';
import { Container } from "semantic-ui-react";
import TodoControl from "./components/TodoControl";
import createStore from "./redux/createStore";


const store = createStore();

function TodoApp() {
  return (
   <Container>
     <Provider store={store}>
       <TodoControl />
     </Provider>
   </Container>
  );
}

export default TodoApp;
