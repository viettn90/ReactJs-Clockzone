import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function FormattedDate(props) {
  return (
    <div>
      <h2>It is {props.namelocate} {props.date}.</h2>
      
    </div>
  )
}

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
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate namelocate='Viet Nam time' date={this.state.date.toLocaleString()} />
        <FormattedDate namelocate='America/Los_Angeles time' date={this.state.date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} />
        
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to My React Project</h1>
        
      </header>
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
        <Clock />
        <Clock />
        
    </div>
  );
}

export default App;
