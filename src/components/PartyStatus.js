import React, { Component } from 'react';

class PartyStatus extends Component {
  partyMembers() {
    return (
      [
        {
          name: 'Caroline',
          age: 24,
        },
        {
          name: 'Josh',
          age: 24,
        },
        {
          name: 'Tyler',
          age: 24,
        },
        {
          name: 'Indu',
          age: 24,
        },
        {
          name: 'Harvey',
          age: 34,
        },
        {
          name: 'Ben',
          age: 26,
        },
      ]
    );
  }
  renderPartyList() {
    return (
      this.partyMembers().map((member) => {
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