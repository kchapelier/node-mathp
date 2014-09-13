(function() {
	"use strict";

	var check = {
		isNaN : isNaN,
		isZero : function isZero(value) {
			return value === 0;
		},
		isPositiveZero : function isPositiveZero(value) {
			return value === 0 && 1 / value === Infinity;
		},
		isNegativeZero : function isNegativeZero(value) {
			return value === 0 && 1 / value === -Infinity;
		},
		isFinite : isFinite,
		isInfinity : function isInfinity(value) {
			return value === Infinity || value === -Infinity;
		},
		isPositiveInfinity : function isPositiveInfinity(value) {
			return value === Infinity;
		},
		isNegativeInfinity : function isNegativeInfinity(value) {
			return value === -Infinity;
		}
	};



	var degreeRadianRatio = 180 / Math.PI;

	var conversion = {
		toDegrees : function toDegrees(radians) {
			return radians * degreeRadianRatio;
		},
		toRadians : function toRadians(degrees) {
			return degrees / degreeRadianRatio;
		}
	};



	var distance = {
		euclideanDistance : function euclideanDistance (x1, y1, x2, y2) {
			return this.sqrt(this.pow(x1 - x2, 2) + this.pow(y1 - y2, 2));
		},
		manhattanDistance : function manhattanDistance (x1, y1, x2, y2) {
			return this.abs(x1 - x2) + this.abs(y1 - y2);
		},
		chebyshevDistance : function chebyshevDistance (x1, y1, x2, y2) {
			return this.max(this.abs(x1 - x2), this.abs(y1 - y2));
		},
		minkowskiDistance : function minkowskiDistance (x1, y1, x2, y2, order) {
			return this.pow(this.pow(this.abs(x1 - x2), order) + this.pow(this.abs(y1 - y2), order), 1 / order);
		},
		euclideanDistanceN : function euclideanDistanceN (point1, point2) {
			var result = 0;

			if(point1.length !== point2.length) {
				result = NaN;
			} else {
				for(var i = 0; i < point1.length; i++) {
					result+= this.pow(point1[i] - point2[i], 2);
				}

				result = this.sqrt(result);
			}

			return result;
		},
		manhattanDistanceN : function manhattanDistanceN (point1, point2) {
			var result = 0;

			if(point1.length !== point2.length) {
				result = NaN;
			} else {
				for(var i = 0; i < point1.length; i++) {
					result += this.abs(point1[i] - point2[i]);
				}
			}

			return result;
		},
		chebyshevDistanceN : function chebyshevDistanceN (point1, point2) {
			var result = 0;

			if(point1.length !== point2.length) {
				result = NaN;
			} else {
				var values = [];

				for(var i = 0; i < point1.length; i++) {
					values.push(this.abs(point1[i] - point2[i]));
				}

				result = this.max.apply(null, values);
			}

			return result;
		},
		minkowskiDistanceN : function minkowskiDistanceN (point1, point2, order) {
			var result = 0;

			if(point1.length !== point2.length) {
				result = NaN;
			} else {
				for(var i = 0; i < point1.length; i++) {
					result+= this.pow(this.abs(point1[i] - point2[i]), order);
				}

				result = this.pow(result, 1 / order);
			}

			return result;
		}
	};



	var extra = {
		wshaper : function wshaper(value, min, max, shape) {
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



	var general = {
		/**
		 * Linear interpolation between two values
		 * @param value1
		 * @param value2
		 * @param ratio
		 * @returns {*}
		 */
		lerp : function lerp(value1, value2, ratio) {
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
			if(min > max) {
				var bmin = max;
				max = min;
				min = bmin;
			}

			return this.max(this.min(value, max), min);
		},
		scale : function scale(value, min, max, dstMin, dstMax) {
			value = (max === min ? 0 : (this.limit(value, min, max) - min) / (max - min));

			return value * (dstMax - dstMin) + dstMin;
		},
		sign1 : function sign1(value) {
			if(this.isNaN(value)) {
				return NaN;
			} else if(value > 0 || this.isPositiveZero(value) || value === Infinity) {
				return 1;
			} else {
				return -1;
			}
		},
		copySign : function copySign(value, sign) {
			return this.abs(value) * this.sign1(sign);
		},
		smoothstep : function smoothstep(min, max, value) {
			value = this.scale(value, min, max, 0, 1);

			return value * value * (3 - 2 * value);
		},
		smootherstep : function smootherstep(min, max, value) {
			value = this.scale(value, min, max, 0, 1);

			return value * value * value * (value * (value * 6 - 15) + 10);
		},
		step : function(step, value) {
			if(isNaN(step) || isNaN(value)) {
				return NaN;
			}

			return (value >= step ? 1 : 0);
		},
		factorial : (function() {
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



	var mean = {
		/**
		 * Root mean square of the values of an array
		 * @param array
		 * @returns {number}
		 */
		rms : function rms(array) {
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



	var polyfill = {
		acosh : function acosh(value) {
			return this.log(value + this.sqrt(value * value - 1));
		},
		asinh : function asinh(value) {
			if(value === -Infinity || this.isNegativeZero(value)) {
				return value;
			} else {
				return this.log(value + this.sqrt(value * value + 1));
			}
		},
		atanh : function atanh(value) {
			if(this.isNegativeZero(value)) {
				return value;
			} else {
				return this.log((1 + value) / (1 - value)) / 2;
			}
		},
		cbrt : function cbrt(value) {
			var y = this.pow(this.abs(value), 1/3);
			return y * this.sign(value);
		},
		clz32 : function clz32(value) {
			value = Number(value) >>> 0;
			return value ? 32 - value.toString(2).length : 32;
		},
		cosh : function cosh(value) {
			var y = this.exp(value);
			return (y + 1 / y) / 2;
		},
		expm1 : function expm1(value) {
			if(this.isNegativeZero(value)) {
				return value;
			} else {
				return this.exp(value) - 1;
			}
		},
		fround : function fround(value) {
			var f32 = new Float32Array(1);
			f32[0] = value;
			return f32[0];
		},
		hypot : function hypot(value1, value2) {
			var y = 0;
			var length = arguments.length;

			for (var i = 0; i < length; i++) {
				if(arguments[i] === Infinity || arguments[i] === -Infinity) {
					return Infinity;
				}

				y += arguments[i] * arguments[i];
			}

			return this.sqrt(y);
		},
		imul : function imul(value1, value2) {
			var ah  = (value1 >>> 16) & 0xffff;
			var al = value1 & 0xffff;
			var bh  = (value2 >>> 16) & 0xffff;
			var bl = value2 & 0xffff;
			return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
		},
		log1p : function log1p(value) {
			if(this.isNegativeZero(value)) {
				return value;
			} else {
				return this.log(1 + value);
			}
		},
		log10 : function log10(value) {
			return this.log(value) / this.LN10;
		},
		log2 : function log2(value) {
			return this.log(value) / this.LN2;
		},
		sign : function sign(value) {
			if(isNaN(value)) {
				return NaN;
			} else if(value === 0) {
				return value;
			} else {
				return value > 0 ? 1 : -1;
			}
		},
		sinh : function sinh(value){
			if(this.isNegativeZero(value)) {
				return value;
			} else {
				var y = this.exp(value);
				return (y - 1/y) / 2;
			}

		},
		tanh : function tanh(value) {
			if(value === Infinity) {
				return 1;
			} else if(value === -Infinity) {
				return -1;
			} else if(this.isNegativeZero(value)) {
				return value;
			} else {
				var y = this.exp(2 * value);
				return (y - 1) / (y + 1);
			}
		},
		trunc : function trunc(value) {
			return value < 0 ? this.ceil(value) : this.floor(value);
		}
	};



	var properties = {
		PI_2 : Math.PI / 2,
		PI_4 : Math.PI / 4,
		GOLDEN_RATIO : (Math.sqrt(5) + 1) / 2
	};



	var trigonometry = {
		sinc : function sinc(value) {
			if(value === 0) {
				return 1;
			} else {
				return (this.sin(value) / value);
			}
		},
		cot : function cot(value) {
			return 1 / this.tan(value);
		},
		sec : function sec(value) {
			return 1 / this.cos(value);
		},
		csc : function csc(value) {
			return 1 / this.sin(value);
		},
		coth : function coth(value) {
			return 1 / this.tanh(value);
		},
		sech : function sech(value) {
			return 1 / this.cosh(value);
		},
		csch : function csch(value) {
			return 1 / this.sinh(value);
		},
		acot : function acot(value) {
			return this.atan(1 / value);
		},
		asec : function asec(value) {
			return this.acos(1 / value);
		},
		acsc : function acsc(value) {
			return this.asin(1 / value);
		},
		acoth : function acoth(value) {
			return this.atanh(1 / value);
		},
		asech : function asech(value) {
			return this.acosh(1 / value);
		},
		acsch : function acsch(value) {
			return this.asinh(1 / value);
		}
	};



	/* Object composition */

	var Mathp = {};

	var importFunctions = function(obj, properties) {
		properties = properties || Object.keys(obj);

		for(var i = 0; i < properties.length; i++) {
			var key = properties[i];
			if(obj.hasOwnProperty(key) && !Mathp.hasOwnProperty(key)) {
				if(typeof obj[key] === 'function') {
					Mathp[key] = obj[key].bind(Mathp);
				} else {
					Mathp[key] = obj[key];
				}
			}
		}
	};

	var mathProperties = [
		'E', 'PI', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'SQRT1_2', 'SQRT2',
		'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2',
		'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround',
		'hypot', 'imul', 'log', 'log1p', 'log10', 'log2', 'max', 'min', 'pow',
		'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
	];

	importFunctions(Math, mathProperties);
	importFunctions(polyfill);
	importFunctions(check);
	importFunctions(properties);
	importFunctions(general);
	importFunctions(trigonometry);
	importFunctions(mean);
	importFunctions(distance);
	importFunctions(conversion);
	importFunctions(extra);

	/* Object composition end */


	module.exports = Mathp;
}());