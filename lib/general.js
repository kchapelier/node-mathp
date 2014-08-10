var general = {
	/**
	 * Linear interpolation between two values
	 * @param value1
	 * @param value2
	 * @param ratio
	 * @returns {*}
	 */
	lerp : function lerp(value1, value2, ratio) {
		"use strict";

		return ((value2 - value1) * this.limit(ratio, 0, 1)) + value1;
	},
	/**
	 * Limit a value to given bounds (aka clamp)
	 * @param value
	 * @param min
	 * @param max
	 * @returns {*}
	 */
	limit : function limit(value, min, max) {
		"use strict";

		if(min > max) {
			var bmin = max;
			max = min;
			min = bmin;
		}

		return this.max(this.min(value, max), min);
	},
	scale : function scale(value, min, max, dstMin, dstMax) {
		"use strict";

		value = (max === min ? 0 : (this.limit(value, min, max) - min) / (max - min));

		return value * (dstMax - dstMin) + dstMin;
	},
	sign1 : function sign1(value) {
		"use strict";

		if(this.isNaN(value)) {
			return NaN;
		} else if(value > 0 || this.isPositiveZero(value) || value === Infinity) {
			return 1;
		} else {
			return -1;
		}
	},
	copySign : function copySign(value, sign) {
		"use strict";

		return this.abs(value) * this.sign1(sign);
	},
	smoothstep : function smoothstep(min, max, value) {
		"use strict";

		value = this.scale(value, min, max, 0, 1);

		return value * value * (3 - 2 * value);
	},
	smootherstep : function smootherstep(min, max, value) {
		"use strict";

		value = this.scale(value, min, max, 0, 1);

		return value * value * value * (value * (value * 6 - 15) + 10);
	},
	factorial : (function() {
		"use strict";

		var factorialCache = { 0 : 1, 1 : 1, 2 : 2, 3 : 6 };

		var factorialFunc = function factorialFunc(value) {
			if(factorialCache[value]) {
				return factorialCache[value];
			} else {
				return (factorialCache[value] = factorialFunc(value - 1) * value);
			}
		};

		return function factorial(value) {
			if (isNaN(value) || value < 0 || value !== this.floor(value)) { //messy isInteger() and positive
				return NaN;
			}

			return factorialFunc(value);
		};
	}())
};

module.exports = general;