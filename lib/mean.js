var mean = {
	/**
	 * Root mean square of the values of an array
	 * @param array
	 * @returns {number}
	 */
	rms : function(array) {
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
	amean : function(array) {
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
	gmean : function(array) {
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
	 * @returns {number} Harmonic mean (can be null)
	 */
	hmean : function(array) {
		"use strict";

		var value = null;

		if(array && array.length > 0) {
			value = 0;

			for (var i = 0; i < array.length; i++) {
				value+= 1/array[i];
			}

			value = array.length / value;
		}

		return value;
	}
};

module.exports = mean;