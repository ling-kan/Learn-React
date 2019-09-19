import React from "react"
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="form">
          <h2>Live Time - adding lifecycle methods to  class</h2>
          <a href="https://reactjs.org/docs/state-and-lifecycle.html">https://reactjs.org/docs/state-and-lifecycle.html</a>
          <p>We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
          <br/>
          We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
          <br/>
          We can declare special methods on the component class to run some code when a component mounts and unmounts:</p>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <p> componentWillUnmount() - method is called when component is being removed from the DOM</p>
          <p>A component’s lifecycle is broadly classified into four parts: initialization, mounting, updating, and unmounting.</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  export default Clock