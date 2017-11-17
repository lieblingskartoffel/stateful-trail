import React, { Component } from 'react'

class Map extends Component {
	stopList () {
		return ([
			{
				name: 'Stop 1',
				distance: 0,
			},
			{
				name: 'Stop 2',
				distance: 7,
			}
		]);
	}
	generateStops () {
		let stops = this.stopList();

		return (
			stops.map((stop) => (
				<div className="stop">
					{stop.name}
				</div>
			))
		)
	}
	render () {
		return (
			<div className="trail">
				{this.generateStops()}
			</div>
		)
	}
}

export default Map;