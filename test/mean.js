"use strict";

require('chai')
	.use(require('./plugin/chai-math'))
	.should();

var Mathp = require('../index.js');

//TODO more loose check on the float values as their precision is dependant of external factors

describe('Mean', function(){
	describe('#amean()', function() {
		it('should return 0 on an empty array and with zero arg', function() {
			Mathp.amean().should.equal(0);
			Mathp.amean([]).should.equal(0);
		});

		it('should return NaN when any of the values is NaN', function() {
			Mathp.amean([0, 1, NaN]).should.be.NaN;
			Mathp.amean([0, 1, "Toto"]).should.be.NaN;
		});

		it('should return the correct arithmetic mean', function() {
			Mathp.amean([0, 1, 2]).should.equal(1);
			Mathp.amean([1, 2, 3]).should.equal(2);
			Mathp.amean([-20, -5, 10]).should.equal(-5);
		});
	});

	describe('#gmean()', function() {
		it('should return 0 on an empty array and with zero arg', function() {
			Mathp.gmean().should.equal(0);
			Mathp.gmean([]).should.equal(0);
		});

		it('should return NaN when any of the values is NaN', function() {
			Mathp.gmean([0, 1, NaN]).should.be.NaN;
			Mathp.gmean([0, 1, "Toto"]).should.be.NaN;
		});

		it('should return the correct geometric mean', function() {
			Mathp.gmean([0, 1, 2]).should.equal(0);
			Mathp.gmean([1, 2, 3]).should.equal(1.8171205928321397);
			Mathp.gmean([-20, -5, 10]).should.equal(9.999999999999998);
		});
	});

	describe('#hmean()', function() {
		it('should return 0 on an empty array and with zero arg', function() {
			Mathp.hmean().should.equal(0);
			Mathp.hmean([]).should.equal(0);
		});

		it('should return NaN when any of the values is NaN', function() {
			Mathp.hmean([0, 1, NaN]).should.be.NaN;
			Mathp.hmean([0, 1, "Toto"]).should.be.NaN;
		});

		it('should return the correct harmonic mean', function() {
			Mathp.hmean([0, 1, 2]).should.equal(0);
			Mathp.hmean([1, 2, 3]).should.equal(1.6363636363636365);
			Mathp.hmean([-20, -5, 10]).should.equal(-20);
		});
	});

	describe('#rms()', function() {
		it('should return 0 on an empty array and with zero arg', function() {
			Mathp.rms().should.equal(0);
			Mathp.rms([]).should.equal(0);
		});

		it('should return NaN when any of the values is NaN', function() {
			Mathp.rms([0, 1, NaN]).should.be.NaN;
			Mathp.rms([0, 1, "Toto"]).should.be.NaN;
		});

		it('should return the correct root mean square', function() {
			Mathp.rms([0, 1, 2]).should.equal(1.2909944487358056);
			Mathp.rms([1, 2, 3]).should.equal(2.160246899469287);
			Mathp.rms([-20, -5, 10]).should.equal(13.228756555322953);
		});
	});

	describe('#median()', function() {
		it('should return 0 on an empty array and with zero arg', function() {
			Mathp.median().should.equal(0);
			Mathp.median([]).should.equal(0);
		});

		it('should return NaN when any of the values is NaN', function() {
			Mathp.median([0, 1, NaN]).should.be.NaN;
			Mathp.median([0, 1, "Toto"]).should.be.NaN;
		});

		it('should return the correct median', function() {
			Mathp.median([0, 1, 2]).should.equal(1);
			Mathp.median([1, 2, 3]).should.equal(2);
			Mathp.median([2, 4, 1, 3]).should.equal(2.5);
			Mathp.median([5, 8, 0, 3, 4]).should.equal(4);
		});
	});
});