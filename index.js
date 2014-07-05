var Mathp = {};

//TODO this breaks most IDE features and should be replaced at a later time
var importFunction = function(module) {
	for(var key in module) {
		if(module.hasOwnProperty(key) && !Mathp.hasOwnProperty(key)) {
			Mathp[key] = module[key];
		}
	}
};

importFunction(require('./lib/general'));
importFunction(require('./lib/mean'));
importFunction(require('./lib/distance'));
importFunction(require('./lib/conversion'));

module.exports = Mathp;