import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputFoo from './InputFoo'
import InputBar from './InputBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textFoo: '',
      textBar: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <InputFoo value={ this.state.textFoo } onChange={e => this.setState({ textFoo: e.target.value })}/>
          <InputBar value={ this.state.textBar } onChange={e => this.setState({ textBar: e.target.value })}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
