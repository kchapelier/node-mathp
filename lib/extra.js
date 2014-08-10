var shaper = {
	wshaper : function wshaper(value, min, max, shape) {
		"use strict";

		value = this.scale(value, min, max, 0, 1);

		value*= shape.length - 1;
		var start = this.floor(value);
		var pos = value % 1;

		if(start === shape.length - 1) {
			value = shape[start];
		} else {
			value = shape[start] * (1 - pos) + shape[start + 1] * (pos);
		}

		return value;
	}
};

module.exports = shaper;