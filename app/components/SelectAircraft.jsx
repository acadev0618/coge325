var React = require('react');
var AircraftFactoryStore = require("../stores/AircraftFactoryStore.js");
var AircraftFactoryActions = require('../actions/AircraftFactoryActions.js');
var createReactClass = require('create-react-class');

var SelectAircraft = createReactClass({

	changeAircraft: function (event) {
		AircraftFactoryActions.load(event.target.value);
	},

	getAircraft: function () {

		return AircraftFactoryStore.list(this.props.contractId);

	},

	render: function() {

		return (
			<select defaultValue={this.props.currentAircraft.registration} 
					onChange={this.changeAircraft}>
				
				{this.getAircraft().map(function (aircraftReg, index) {
					
					return <option key={index} 
								   value={aircraftReg}>
								   {aircraftReg}
							</option>

				}, this)}
			
			</select>
		);

	}

});

module.exports = SelectAircraft;