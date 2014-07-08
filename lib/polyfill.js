//TODO fround, imul

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
	clz32 : function(value) {
		"use strict";

		value = Number(value) >>> 0;
		return value ? 32 - value.toString(2).length : 32;
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
	fround : function(value) {
		var f32 = new Float32Array(1);
		return f32[0] = value, f32[0];
	},
	hypot : function(value1, value2, value3) {
		"use strict";

		var y = 0;
		var length = arguments.length;

		for (var i = 0; i < length; i++) {
			if(arguments[i] === Infinity || arguments[i] === -Infinity) {
				return Infinity;
			}

			y += arguments[i] * arguments[i];
		}

		return Math.sqrt(y);
	},
	imul : function(value1, value2) {
		var ah  = (value1 >>> 16) & 0xffff;
		var al = value1 & 0xffff;
		var bh  = (value2 >>> 16) & 0xffff;
		var bl = value2 & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	},
	log1p : function(value) {
		"use strict";

		return Math.log(1 + value);
	},
	log10 : function(value) {
		"use strict";

		return Math.log(value) / Math.LN10;
	},
	log2 : function(value) {
		"use strict";

		return Math.log(value) / Math.LN2;
	},
	sign : function(value) {
		"use strict";

		if(isNaN(value)) {
			return NaN;
		} else if(value === 0) {
			return value;
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