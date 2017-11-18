import React, { Component } from 'react';

class StartForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [
				{
					name: '',
					age: null,
				},
				{
					name: '',
					age: null,
				},
				{
					name: '',
					age: null,
				},
				{
					name: '',
					age: null,
				},
				{
					name: '',
					age: null,
				},
				{
					name: '',
					age: null,
				},
			]
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderRow(id) {
		return (
			<div key={id} className="start-form-row">
				<input type="text" id={id} value={this.state.members[id].name} onChange={this.handleNameChange} />
			</div>
		);
	}


	handleNameChange(event, f, z) {
		let copiedState = Object.assign({}, this.state);
		copiedState.members[event.target.id].name = event.target.value;
		this.setState(copiedState);
	}

	handleSubmit(event) {
		alert('something happened and its value was ' + this.state.members.map((member) => {return member.name}));
		event.preventDefault();
	}

	getPartySkeleton() {
		return [0,1,2,3,4,5];
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					{this.getPartySkeleton().map((id) => {return this.renderRow(id)})}
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default StartForm;