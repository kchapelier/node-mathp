var mean = {
	/**
	 * Root mean square of the values of an array
	 * @param array
	 * @returns {number}
	 */
	rms : function rms(array) {
		"use strict";

		var value = 0;

		if(array && array.length > 0) {
			for (var i = 0; i < array.length; i++) {
				value+= array[i] * array[i];
			}

			value = this.sqrt(value / array.length);
		}

		return value;
	},
	/**
	 * Arithmetic mean of the values of an array
	 * @param array
	 * @returns {number} Arithmetic mean
	 */
	amean : function amean(array) {
		"use strict";

		var value = 0;

		if(array && array.length > 0) {
			for (var i = 0; i < array.length; i++) {
				value+= array[i];
			}

			value = value / array.length;
		}

		return value;
	},
	/**
	 * Geometric mean of the values of an array
	 * @param array
	 * @returns {number} Geometric mean
	 */
	gmean : function gmean(array) {
		"use strict";

		var value = 0;

		if(array && array.length > 0) {
			value = 1;

			for (var i = 0; i < array.length; i++) {
				value*= array[i];
			}

			value = this.pow(value, 1 / array.length);
		}

		return value;
	},
	/**
	 * Harmonic mean of the values of an array
	 * @param array
	 * @returns {number} Harmonic mean
	 */
	hmean : function hmean(array) {
		"use strict";

		var value = 0;

		if(array && array.length > 0) {
			value = 0;

			for (var i = 0; i < array.length; i++) {
				value+= 1/array[i];
			}

			value = array.length / value;
		}

		return value;
	},
	/**
	 * Median of the values of an array
	 * @param array
	 * @returns {number} Median
	 */
	median : function median(array) {
		"use strict";

		var value = 0;

		if(array && array.length > 0) {
			for(var i = 0; i < array.length; i++) {
				if(isNaN(array[i])) {
					return NaN;
				}
			}

			var mid = this.floor(array.length / 2);

			array = array.slice(0).sort();

			if (array.length % 2) {
				value = array[mid];
			} else {
				value = (array[mid - 1] + array[mid]) / 2;
			}
		}

		return value;
	}
};

module.exports = mean;