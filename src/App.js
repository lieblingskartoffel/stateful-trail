import React, { Component } from 'react';
import logo from './images/logo2.png';
import './App.css';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="status-sidebar">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stateful Trail</h1>
          </header>
          <p className="party-sidebar">
            To be filled in with party info.
          </p>
        </div>
        <div className="main-content">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
