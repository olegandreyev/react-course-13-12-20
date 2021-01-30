import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";
import Week1 from "./home-works/hw1/Week1";
import CompositionExample from "./class-works/cw2/compositions-example/CompositionExample";
import Blog from "./class-works/cw2/life-cycle-example/Blog";
import AutofocusInput from "./class-works/cw2/refs/AutofocusInput";
import Dz2 from "./home-works/hw2/Dz2";
import Counter, { CounterFunction, MouseTrackerExample } from "./class-works/cw3/HooksExample";
import Website from "./class-works/cw3/UseContextExample";
import { PriceComponent } from "./home-works/hw3/useDocumentTitle";
import { OnlineComponent } from "./home-works/hw3/useIsOnline";
import { LocalStorageExample } from "./home-works/hw3/useLocalStorage";
import UseCallbackExample from "./class-works/cw4/UseCallbackExample";
import BlogV2 from "./home-works/hw4/blog-v2/Blog";
import TodoApp from "./class-works/cw5/ReduxApp/TodoApp";
import DZ5 from "./home-works/hw5/App";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/*<Blog />*/}
        {/*<Website />*/}
        {/*<UseCallbackExample />*/}
        {/*<PriceComponent/>*/}
        {/*<OnlineComponent/>*/}
        {/*<LocalStorageExample />*/}
        {/*<BlogV2 />*/}
        {/*<TodoApp />*/}
        <DZ5 />
      </div>
    )
  }
}

export default App;
