var check = {
	isNaN : isNaN,
	isZero : function isZero(value) {
		"use strict";

		return value === 0;
	},
	isPositiveZero : function isPositiveZero(value) {
		"use strict";

		return value === 0 && 1 / value === Infinity;
	},
	isNegativeZero : function isNegativeZero(value) {
		"use strict";

		return value === 0 && 1 / value === -Infinity;
	},
	isFinite : isFinite,
	isInfinity : function isInfinity(value) {
		"use strict";

		return value === Infinity || value === -Infinity;
	},
	isPositiveInfinity : function isPositiveInfinity(value) {
		"use strict";

		return value === Infinity;
	},
	isNegativeInfinity : function isNegativeInfinity(value) {
		"use strict";

		return value === -Infinity;
	}
};

module.exports = check;