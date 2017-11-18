import React, { Component } from 'react';
import Map from './Map';
import StartForm from './StartForm';

class MainPanel extends Component {
  chooseView(args) {
    if (args.isStarted) {
      return (<Map />)
    }
    else {
      return (<StartForm members={args.members} handleNameChange={args.handleNameChange} startGame={args.startGame}/>)
    }
  }
  render () {
    return (
      <div className="main-content">
        {this.chooseView(
          {
            isStarted: this.props.isStarted,
            members: this.props.members,
            handleNameChange: this.props.handleNameChange,
            startGame: this.props.startGame
          }
        )}
      </div>
    )
  }
}

export default MainPanel;