var React = require('react');
var AircraftFactoryStore = require('../stores/AircraftFactoryStore.js');
var CoGTable = require('./CoGTable.jsx');
var Controls = require('./Controls.jsx');
var CoGStaChart = require('./CoGStaChart.jsx');
var CoGBlChart = require('./CoGBlChart.jsx');
var CoGOverview = require('./CoGOverview.jsx');
var createReactClass = require('create-react-class');
var StateMixin = require('reflux-state-mixin');

var App = createReactClass({
	mixins: [StateMixin.connect(AircraftFactoryStore)],

	render() {

		//Totals are needed in multiple places therefore we generate them here and pass
		//through.
		var totals = this.state.aircraft.getCoGTotals();
		var zfwnb  = this.state.aircraft.getCoGZFWnB();
		var details = this.state.aircraft.getCoGDetails();
		var landing = this.state.aircraft.getCoGLanding();
		landing = +(landing + zfwnb.weight).toFixed(2);

		var possibleCrew   = this.state.crew;

		var displayUnits = this.state.aircraft.displayUnits;

		return (
			<div>
				<Controls isSaving={this.state.isSaving} currentAircraft={this.state.aircraft} contractId={this.props.contractId} />
				<CoGOverview aircraft={this.state.aircraft} totals={totals} zfwnb={zfwnb} displayUnits={displayUnits} />
				<div className="chart-container">
					<div className="chart-sub-container">
						<div className='chart'>
							<CoGStaChart  zfwnb={zfwnb} totals={totals} details={details} envelope={this.state.aircraft.staEnvelope} displayUnits={displayUnits} />
						</div>
						<div className='chart'>
							<CoGBlChart  zfwnb={zfwnb} totals={totals} envelope={this.state.aircraft.blEnvelope} displayUnits={displayUnits} />
						</div>
					</div>
				</div>
				<div className="kit_core zebra"> 
					<CoGTable possibleCrew={possibleCrew} zfwnb={zfwnb} totals={totals} landing={landing} aircraft={this.state.aircraft} displayUnits={displayUnits} />
				</div>
			</div>
		);
	}

});

module.exports = App;
