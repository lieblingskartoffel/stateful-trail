import React, { Component } from 'react';
import logo from './images/logo2.png';
import './App.css';
import Map from './components/Map';
import PartyStatus from './components/PartyStatus';
import StartForm from './components/StartForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          name: 'Caroline',
          age: 24,
          id: 0,
        },
        {
          name: 'Josh',
          age: 24,
          id: 1,
        },
        {
          name: 'Tyler',
          age: 24,
          id: 2,
        },
        {
          name: 'Indu',
          age: 24,
          id: 3,
        },
        {
          name: 'Harvey',
          age: 34,
          id: 4,
        },
        {
          name: 'Ben',
          age: 26,
          id: 5,
        },
      ]
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    let copiedState = Object.assign({}, this.state);
    copiedState.members[event.target.id].name = event.target.value;
    this.setState(copiedState);
  }

  render() {
    return (
      <div className="App">
        <div className="status-sidebar">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stateful Trail</h1>
          </header>
          <div className="party-sidebar">
            <PartyStatus members={this.state.members}/>
          </div>
        </div>
        <div className="main-content">
          <Map />
          <StartForm members={this.state.members} handleNameChange={this.handleNameChange}/>
        </div>
      </div>
    );
  }
}

export default App;
