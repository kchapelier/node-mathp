var conversion = {
	toDegrees : function(radians) {
		"use strict";

		return radians * 180 / Math.PI;
	},
	toRadians : function(degrees) {
		"use strict";

		return degrees / 180 * Math.PI;
	}
};

module.exports = conversion;