import React, { useState, useEffect } from 'react';
import { useMousePosition } from "./use-mouse-position";

class Counter extends React.Component {
  state = {
    count: 0,
    name: 'Irina'
  };

  componentDidMount() {
    console.log('Component has rendered');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  };
  render() {
    return (
      <button onClick={this.increment}>Clicked {this.state.count} times</button>
    )
  }
}


function CounterFunction({ start }) {
  const [count, setCount] = useState(start);
  const [name, setName] = useState('');

  useEffect(() => { // componentDidMount() analogue
    console.log('Component has rendered');
  }, []);

  useEffect(() => { // componentDidUpdate() analogue
    document.title = `You clicked ${count} times`
  }, [count]);

  useEffect(() => {
    if (name === 'reset') {
      setCount(0);
    }
  }, [name]);

  const eraseNameWhenTen = () => {
    if (count > 6) {
      setName('');
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <button onClick={eraseNameWhenTen}>Clicked {count} times</button>
      <br/>
      <br/>
      <input placeholder='Fill name' type="text" value={name} onChange={e => setName(e.target.value)}/>
      Name: {name}
    </div>
  )
}

CounterFunction.defaultProps = {
  start: 0
};


function MouseTrackerExample() {

  const { x, y } = useMousePosition();

  return (
    <div>
      x: {x}
      <br/>
      y: {y}
    </div>
  )
}


export default Counter;
export { CounterFunction, MouseTrackerExample };
