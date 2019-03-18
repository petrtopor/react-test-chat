import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

const Message = props =>
  <div className="message">
    <div className="header">
      <div className="from">
        <span>
          {props.from}
        </span>
      </div>
      <div className="arrow">
        <span>
          ->
        </span>
      </div>
      <div className="to">
        <span>
        {props.to}
        </span>
      </div>
    </div>
    <div className="content">
      <span>
      {props.text}
      </span>
    </div>
  </div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMessage: {
        from: '',
        to: '',
        text: ''
      },
      messages: [
        {
          from: 'vagiz',
          to: 'petrtopor',
          text: '1'
        },
        {
          from: 'petrtopor',
          to: 'vagiz',
          text: '2'
        }
      ]
    }
  }

  handleCurrentMessageFromChange = e => this.setState({
    currentMessage: {
      from: e.currentTarget.value,
      to: this.state.currentMessage.to,
      text: this.state.currentMessage.text
    }
  })
  handleCurrentMessageToChange = e => this.setState({
    currentMessage: {
      from: this.state.currentMessage.from,
      to: e.currentTarget.value,
      text: this.state.currentMessage.text
    }
  })
  handleCurrentMessageTextChange = e => this.setState({
    currentMessage: {
      from: this.state.currentMessage.from,
      to: this.state.currentMessage.to,
      text: e.currentTarget.value
    }
  })

  render() {
    const messages = this.state.messages.map(message =>
      <Message from={message.from} to={message.to} text={message.text}/>
    )
    return (
      <div className="App">
        <div className="chat">
          <div className="messages">
            {messages}
          </div>
          <div className="messageInput">
            <div className="inputFields">
              <div className="inputField">
                <input type="text" onChange={this.handleCurrentMessageFromChange}/>
              </div>
              <div className="inputField">
                <input type="text" onChange={this.handleCurrentMessageToChange}/>
              </div>
              <div className="inputField">
              <input type="text" onChange={this.handleCurrentMessageTextChange}/>
              </div>
            </div>
            <div className="submitButton" onClick={() => this.setState({messages: [this.state.currentMessage, ...this.state.messages]})}>
              <span>
                Send
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
