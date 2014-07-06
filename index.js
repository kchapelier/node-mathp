var Mathp = {};

//TODO this breaks most IDE features and should be replaced at a later time
var importFunction = function(module) {
	for(var key in module) {
		if(module.hasOwnProperty(key) && !Mathp.hasOwnProperty(key)) {
			Mathp[key] = module[key];
		}
	}
};

//proxy all the methodes and properties of the Math object

[
	'E', 'PI', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'SQRT1_2', 'SQRT2',
	'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2',
	'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround',
	'hypot', 'imul', 'log', 'log1p', 'log10', 'log2', 'max', 'min', 'pow',
	'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
].forEach(function(key) {
	/*/
	if(Math.hasOwnProperty(key)) {
		//console.log('+ ' + key);
	} else {
		console.log('- ' + key);
	}
	/*/
	if(Math.hasOwnProperty(key) && !Mathp.hasOwnProperty(key)) {
		Mathp[key] = Math[key];
	}
	/**/
});


importFunction(require('./lib/polyfill'));
importFunction(require('./lib/properties'));
importFunction(require('./lib/general'));
importFunction(require('./lib/trigonometry'));
importFunction(require('./lib/mean'));
importFunction(require('./lib/distance'));
importFunction(require('./lib/conversion'));
importFunction(require('./lib/shaper'));

module.exports = Mathp;