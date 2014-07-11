var check = {
	isNaN : function(value) {
		"use strict";

		return isNaN(value);
	},
	isZero : function(value) {
		"use strict";

		return value === 0;
	},
	isPositiveZero : function(value) {
		"use strict";

		return value === 0 && 1 / value === Infinity;
	},
	isNegativeZero : function(value) {
		"use strict";

		return value === 0 && 1 / value === -Infinity;
	},
	isInfinity : function(value) {
		"use strict";

		return value === Infinity || value === -Infinity;
	},
	isPositiveInfinity : function(value) {
		"use strict";

		return value === Infinity;
	},
	isNegativeInfinity : function(value) {
		"use strict";

		return value === -Infinity;
	}
};

module.exports = check;