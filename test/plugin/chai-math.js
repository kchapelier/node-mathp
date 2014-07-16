var plugin = function(chai, utils) {
	utils.addProperty(chai.Assertion.prototype, 'NaN', function () {
		this.assert(
			(typeof this._obj === 'number' && isNaN(this._obj)),
			'expected #{this} to be NaN',
			'expected #{this} to not be NaN'
		);
	});

	utils.addProperty(chai.Assertion.prototype, 'negativeZero', function () {
		this.assert(
			(typeof this._obj === 'number' && 1/this._obj === -Infinity),
			'expected #{this} to be negative zero',
			'expected #{this} to not be negative zero'
		);
	});

	utils.addProperty(chai.Assertion.prototype, 'positiveZero', function () {
		this.assert(
			(typeof this._obj === 'number' && 1/this._obj === Infinity),
			'expected #{this} to be positive zero',
			'expected #{this} to not be positive zero'
		);
	});
};

module.exports = plugin;