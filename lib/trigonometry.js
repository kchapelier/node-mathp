var trigonometry = {
	sinc : function sinc(value) {
		"use strict";

		if(value === 0) {
			return 1;
		} else {
			return (this.sin(value) / value);
		}
	},
	cot : function cot(value) {
		"use strict";

		return 1 / this.tan(value);
	},
	sec : function sec(value) {
		"use strict";

		return 1 / this.cos(value);
	},
	csc : function csc(value) {
		"use strict";

		return 1 / this.sin(value);
	},
	coth : function coth(value) {
		"use strict";

		return 1 / this.tanh(value);
	},
	sech : function sech(value) {
		"use strict";

		return 1 / this.cosh(value);
	},
	csch : function csch(value) {
		"use strict";

		return 1 / this.sinh(value);
	},
	acot : function acot(value) {
		"use strict";

		return this.atan(1 / value);
	},
	asec : function asec(value) {
		"use strict";

		return this.acos(1 / value);
	},
	acsc : function acsc(value) {
		"use strict";

		return this.asin(1 / value);
	},
	acoth : function acoth(value) {
		"use strict";

		return this.atanh(1 / value);
	},
	asech : function asech(value) {
		"use strict";

		return this.acosh(1 / value);
	},
	acsch : function acsch(value) {
		"use strict";

		return this.asinh(1 / value);
	}
};

module.exports = trigonometry;