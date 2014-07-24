var degreeRadianRatio = 180 / Math.PI;

var conversion = {
	toDegrees : function(radians) {
		"use strict";

		return radians * degreeRadianRatio;
	},
	toRadians : function(degrees) {
		"use strict";

		return degrees / degreeRadianRatio;
	}
};

module.exports = conversion;