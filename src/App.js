import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";
import Week1 from "./home-works/hw1/Week1";


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Week1 />
      </div>
    )
  }
}

export default App;
