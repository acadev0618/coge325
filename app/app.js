var AircraftFactoryStore = require('./stores/AircraftFactoryStore.js');
var AircraftFactoryActions = require('./actions/AircraftFactoryActions.js');

var React = require('react');
var ReactDOM = require("react-dom");
var App = require('./components/App.jsx');

window.CoG = function CoG(domElement, aircraftDef) {

	//TODO: Might be nice to remove the use of a global here.
	window.loadedAircraft = aircraftDef;

	ReactDOM.render(<App />, document.getElementById(domElement));

}