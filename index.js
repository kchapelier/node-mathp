var Mathp = {};

var importFunctions = function(obj, functions) {
	functions = functions || Object.keys(obj);

	for(var i = 0; i < functions.length; i++) {
		var key = functions[i];
		if(obj.hasOwnProperty(key) && !Mathp.hasOwnProperty(key)) {
			Mathp[key] = obj[key];
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
importFunctions(require('./lib/polyfill'));
importFunctions(require('./lib/check'));
importFunctions(require('./lib/properties'));
importFunctions(require('./lib/general'));
importFunctions(require('./lib/trigonometry'));
importFunctions(require('./lib/mean'));
importFunctions(require('./lib/distance'));
importFunctions(require('./lib/conversion'));
importFunctions(require('./lib/shaper'));

module.exports = Mathp;