import React, { Component } from 'react';

class PartyStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members
    };
  }

  renderPartyList() {
    return (
      this.state.members.map((member) => {
        let text = member.name + ', ' + member.age;
        return (<div key={member.name}>{text}</div>)
      })
    );
  }
  render() {
    return (
      <div className="party-list">
        Party Status:
        {this.renderPartyList()}
      </div>
    );
  }
}

export default PartyStatus;