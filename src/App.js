import React, { Component } from 'react';
import logo from './images/logo2.png';
import './App.css';
import Map from './components/Map';
import PartyStatus from './components/PartyStatus';
import StartForm from './components/StartForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="status-sidebar">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stateful Trail</h1>
          </header>
          <div className="party-sidebar">
            <PartyStatus />
          </div>
        </div>
        <div className="main-content">
          <Map />
          <StartForm />
        </div>
      </div>
    );
  }
}

export default App;
