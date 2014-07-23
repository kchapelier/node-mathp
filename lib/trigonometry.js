var trigonometry = {
	sinc : function(value) {
		"use strict";

		if(value === 0) {
			return 1;
		} else {
			return (this.sin(value) / value);
		}
	},
	cot : function(value) {
		"use strict";

		return 1 / this.tan(value);
	},
	sec : function(value) {
		"use strict";

		return 1 / this.cos(value);
	},
	csc : function(value) {
		"use strict";

		return 1 / this.sin(value);
	},
	coth : function(value) {
		"use strict";

		return 1 / this.tanh(value);
	},
	sech : function(value) {
		"use strict";

		return 1 / this.cosh(value);
	},
	csch : function(value) {
		"use strict";

		return 1 / this.sinh(value);
	},
	acot : function(value) {
		"use strict";

		return this.atan(1 / value);
	},
	asec : function(value) {
		"use strict";

		return this.acos(1 / value);
	},
	acsc : function(value) {
		"use strict";

		return this.asin(1 / value);
	},
	acoth : function(value) {
		"use strict";

		return this.atanh(1 / value);
	},
	asech : function(value) {
		"use strict";

		return this.acosh(1 / value);
	},
	acsch : function(value) {
		"use strict";

		return this.asinh(1 / value);
	}
};

module.exports = trigonometry;