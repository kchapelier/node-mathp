var polyfill = {
	acosh : function(value) {
		"use strict";

		return Math.log(value + Math.sqrt(value * value - 1));
	},
	asinh : function(value) {
		"use strict";

		if(value === -Infinity) {
			return value;
		} else {
			return Math.log(value + Math.sqrt(value * value + 1));
		}
	},
	atanh : function(value) {
		"use strict";

		return Math.log((1+value)/(1-value)) / 2;
	},
	cbrt : function(value) {
		"use strict";

		var y = Math.pow(Math.abs(value), 1/3);
		return value < 0 ? -y : y;
	},
	cosh : function(value) {
		"use strict";

		var y = Math.exp(value);
		return (y + 1 / y) / 2;
	},
	expm1 : function(value) {
		"use strict";

		return Math.exp(value) - 1;
	},
	sign : function(value) {
		"use strict";

		if(isNaN(value)) {
			return NaN;
		} else if(value === 0) {
			return 0;
		} else {
			return value > 0 ? 1 : -1;
		}
	},
	sinh : function(value){
		"use strict";

		var y = Math.exp(value);
		return (y - 1/y) / 2;
	},
	tanh : function(value) {
		"use strict";

		if(value === Infinity) {
			return 1;
		} else if(value === -Infinity) {
			return -1;
		} else {
			var y = Math.exp(2 * value);
			return (y - 1) / (y + 1);
		}
	},
	trunc : function(value) {
		"use strict";

		return value < 0 ? Math.ceil(value) : Math.floor(value);
	}
};

module.exports = polyfill;