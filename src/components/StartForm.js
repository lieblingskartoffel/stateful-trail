import React, { Component } from 'react';

class StartForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			members: this.props.members
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderRow(member) {
		return (
			<div key={member.id} className="start-form-row">
				<input type="text" id={member.id} value={member.name} onChange={this.props.handleNameChange} />
			</div>
		);
	}

	handleNameChange(event) {
		this.props.handleNameChange(event);
	}

	handleSubmit(event) {
		this.props.startGame();
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
				Enter the names of your party members!
					{this.props.members.map((member) => {return this.renderRow(member)})}
				</label>
				<input type="submit" value="Start Game" />
			</form>
		)
	}
}

export default StartForm;