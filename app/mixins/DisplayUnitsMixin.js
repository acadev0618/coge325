var METRIC = require("../aircraft/AircraftConstants.js").METRIC;
var IMPERIAL = require("../aircraft/AircraftConstants.js").IMPERIAL;


var DisplayUnitsMixin = {

	displayWeightUnitsString: function (displayUnits) {

		if (displayUnits === METRIC) {

			return "kg";

		} else if (displayUnits === IMPERIAL) {

			return "lb";

		}

	},

	displayLengthUnitsString: function (displayUnits) {

		if (displayUnits === METRIC) {

			return "mm";

		} else if (displayUnits === IMPERIAL) {

			return "in";

		}

	}

};

module.exports = DisplayUnitsMixin;