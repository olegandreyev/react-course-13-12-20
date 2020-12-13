import React from 'react';
import './App.css';
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <UserList />
      </div>
    )
  }
}

export default App;
