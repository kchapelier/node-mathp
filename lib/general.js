var general = {
	/**
	 * Linear interpolation between two values
	 * @param value1
	 * @param value2
	 * @param ratio
	 * @returns {*}
	 */
	lerp : function(value1, value2, ratio) {
		return ((value2 - value1) * ratio) + value1;
	},
	/**
	 * Limit a value to given bounds (aka clamp)
	 * @param value
	 * @param min
	 * @param max
	 * @returns {*}
	 */
	limit : function(value, min, max) {
		if(min > max) {
			var bmin = max;
			max = min;
			min = bmin;
		}

		return this.max(this.min(value, max), min);
	}
};

module.exports = general;