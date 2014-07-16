"use strict";

var chai = require('chai');
chai.use(require('./plugin/chai-math'));
var should = chai.should();

var Mathp = require('../index.js');

//TODO more loose check on the float values as their precision is dependant of external factors

describe('Conversion', function(){
	describe('#wshaper()', function() {
		it('should make the correct conversion', function() {
			Mathp.wshaper(0, 0, 1, [1, 10]).should.equal(1);
			Mathp.wshaper(0.5, 0, 1, [1, 10]).should.equal(5.5);
			Mathp.wshaper(1, 0, 1, [1, 10]).should.equal(10);
		});

		it('should not go out of bound', function() {
			Mathp.wshaper(-1, 0, 1, [1, 10]).should.equal(1);
			Mathp.wshaper(1.5, 0, 1, [1, 10]).should.equal(10);
		});
	});
});