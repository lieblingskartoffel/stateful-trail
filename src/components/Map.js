import React, { Component } from 'react'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stops: this.stopList(),
      atStop: 0
    };

    this.moveTime = this.moveTime.bind(this);
  }

  moveTime() {
    let copiedState = Object.assign({}, this.state);
    copiedState.atStop++;
    this.setState(copiedState);
  }

  stopList () {
    return ([
      {
        name: 'Stop 1',
        distance: 0,
        id: 0,
      },
      {
        name: 'Stop 2',
        distance: 7,
        id: 1,
      }
    ]);
  }
  generateStops () {
    let stops = this.stopList();

    return (
      stops.map((stop) => {
        return (
          <div className="stop" key={stop.distance}>
            {stop.name + ((this.state.atStop == stop.id) ? ' here' : '')}
          </div>
        )
      })
    )
  }
  render () {
    return (
      <div className="trail">
        <button onClick={this.moveTime}>Move Time</button>
        {this.generateStops()}
      </div>
    )
  }
}

export default Map;