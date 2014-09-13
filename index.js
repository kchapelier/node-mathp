/* Object elements retrieval */

var polyfill = require('./lib/polyfill'),
	check = require('./lib/check'),
	properties = require('./lib/properties'),
	general = require('./lib/general'),
	trigonometry = require('./lib/trigonometry'),
	mean = require('./lib/mean'),
	distance = require('./lib/distance'),
	conversion = require('./lib/conversion'),
	extra = require('./lib/extra');

/* Object elements retrieval end */


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