"use strict";

require('chai')
	.use(require('./plugin/chai-math'))
	.should();

var Mathp = require('../index.js');

describe('General', function() {
	describe('#lerp()', function() {
		it('should make a proper linear interpolation', function() {
			Mathp.lerp(0, 10, 0.2).should.equal(2);
			Mathp.lerp(0, 10, 0).should.equal(0);
			Mathp.lerp(0, 10, 1).should.equal(10);
			Mathp.lerp(5, -5, 0.2).should.equal(3);
		});

		it('should never return a value outside of the bounds', function() {
			Mathp.lerp(0, 10, 100).should.equal(10);
			Mathp.lerp(0, 10, -100).should.equal(0);
		});
	});

	describe('#limit()', function() {
		it('should limit the given value to the bounds', function() {
			Mathp.limit(12, 10, 20).should.equal(12);
			Mathp.limit(1, 10, 20).should.equal(10);
			Mathp.limit(20.1, 10, 20).should.equal(20);
		});

		it('should accept any order for the bounds', function() {
			Mathp.limit(1, 10, 20).should.equal(10);
			Mathp.limit(1, 20, 10).should.equal(10);
		});
	});

	describe('#scale()', function() {
		it('should scale accordingly to the bounds', function() {
			Mathp.scale(0, 0, 1, -1, 1).should.equal(-1);
			Mathp.scale(0.5, 0, 1, -1, 1).should.equal(0);
			Mathp.scale(1, 0, 1, -1, 1).should.equal(1);
		});

		it('should never return a value outside of the destination bounds', function() {
			Mathp.scale(100, 0, 1, -1, 1).should.equal(1);
			Mathp.scale(-1, 0, 1, -1, 1).should.equal(-1);
		});

		it('should work with inverted min and max destination bounds', function() {
			Mathp.scale(1, 0, 1, 1, -1).should.equal(-1);
			Mathp.scale(0, 0, 1, 1, -1).should.equal(1);
		});

		it('should work with inverted min and max original bounds', function() {
			Mathp.scale(1, 1, 0, -1, 1).should.equal(-1);
			Mathp.scale(0, 1, 0, -1, 1).should.equal(1);
		});
	});

	describe('#sign1()', function() {
		it('should only returns values as 1, -1 or NaN', function() {
			Mathp.sign1(3).should.equal(1);
			Mathp.sign1(-3).should.equal(-1);
			Mathp.sign1("-3").should.equal(-1);
			Mathp.sign1(0).should.equal(1);
			Mathp.sign1(-0).should.equal(-1);
			Mathp.sign1(NaN).should.be.NaN;
			Mathp.sign1("foo").should.be.NaN;
			Mathp.sign1().should.be.NaN;
			Mathp.sign1(Infinity).should.equal(1);
			Mathp.sign1(-Infinity).should.equal(-1);
		});
	});

	describe('#copySign()', function() {
		it('should return NaN if at least one argument is NaN', function() {
			Mathp.copySign(NaN, 1).should.be.NaN;
			Mathp.copySign(1, NaN).should.be.NaN;
			Mathp.copySign(NaN, NaN).should.be.NaN;
			Mathp.copySign('Toto', 1).should.be.NaN;
			Mathp.copySign(1, 'Toto').should.be.NaN;
		});

		it('should apply the sign of the second argument to the first arguments', function() {
			Mathp.copySign(2, 3).should.equal(2);
			Mathp.copySign(2, -3).should.equal(-2);
			Mathp.copySign(-2, 3).should.equal(2);
			Mathp.copySign(-2, -3).should.equal(-2);
		});

		it('should not return 0 when sign is 0 or -0', function() {
			Mathp.copySign(2, 0).should.equal(2);
			Mathp.copySign(2, -0).should.equal(-2);
			Mathp.copySign(-2, 0).should.equal(2);
			Mathp.copySign(-2, -0).should.equal(-2);
		});
	});

	describe('#smoothstep()', function() {
		it('should return NaN if at least one argument is NaN', function() {
			Mathp.smoothstep(NaN, 1 , 1).should.be.NaN;
			Mathp.smoothstep(0, NaN , 1).should.be.NaN;
			Mathp.smoothstep(0, 1 , NaN).should.be.NaN;
			Mathp.smoothstep('toto', 1 , 1).should.be.NaN;
			Mathp.smoothstep(0, 'toto' , 1).should.be.NaN;
			Mathp.smoothstep(0, 1 , 'toto').should.be.NaN;
		});

		it('should apply the smoothstep correctly for the boundaries and the middle', function() {
			Mathp.smoothstep(0, 1, 0).should.equal(0);
			Mathp.smoothstep(0, 1, 0.5).should.equal(0.5);
			Mathp.smoothstep(0, 1, 1).should.equal(1);
		});

		it('should apply the smootherstep correctly', function() {
			Mathp.smoothstep(-10, 10, 7).should.equalFloat(0.9392499999999999);
			Mathp.smoothstep(-10, 10, -7).should.equal(0.06075);
		});

		it('should never return a value outside of the bounds', function() {
			Mathp.smoothstep(0, 1 , 2).should.equal(1);
			Mathp.smoothstep(0, 1 , -1).should.equal(0);
		});
	});

	describe('#smootherstep()', function() {
		it('should return NaN if at least one argument is NaN', function() {
			Mathp.smootherstep(NaN, 1 , 1).should.be.NaN;
			Mathp.smootherstep(0, NaN , 1).should.be.NaN;
			Mathp.smootherstep(0, 1 , NaN).should.be.NaN;
			Mathp.smootherstep('toto', 1 , 1).should.be.NaN;
			Mathp.smootherstep(0, 'toto' , 1).should.be.NaN;
			Mathp.smootherstep(0, 1 , 'toto').should.be.NaN;
		});

		it('should apply the smootherstep correctly for the boundaries and the middle', function() {
			Mathp.smootherstep(0, 1, 0).should.equal(0);
			Mathp.smootherstep(0, 1, 0.5).should.equal(0.5);
			Mathp.smootherstep(0, 1, 1).should.equal(1);
		});

		it('should apply the smootherstep correctly', function() {
			Mathp.smootherstep(-10, 10, 7).should.equalFloat(0.9733881249999993);
			Mathp.smootherstep(-10, 10, -7).should.equalFloat(0.026611875);
		});

		it('should never return a value outside of the bounds', function() {
			Mathp.smootherstep(0, 1 , 2).should.equal(1);
			Mathp.smootherstep(0, 1 , -1).should.equal(0);
		});
	});

	describe('#step()', function() {
		it('should return NaN if at least one argument is NaN', function() {
			Mathp.step(NaN, 0).should.be.NaN;
			Mathp.step(0, NaN).should.be.NaN;
			Mathp.step('toto', 0).should.be.NaN;
			Mathp.step(0, 'toto').should.be.NaN;
		});

		it('should return 1 if value > step', function() {
			Mathp.step(0, 1).should.equal(1);
			Mathp.step(100, 110).should.equal(1);
		});

		it('should return 1 if value == step', function() {
			Mathp.step(0, 0).should.equal(1);
			Mathp.step(100, 100).should.equal(1);
		});

		it('should return 0 if value < step', function() {
			Mathp.step(0, -1).should.equal(0);
			Mathp.step(100, 90).should.equal(0);
		});
	});

	describe('#factorial()', function() {
		it('should return NaN if the argument is not a positive integer', function () {
			Mathp.factorial(NaN).should.be.NaN;
			Mathp.factorial('toto').should.be.NaN;
			Mathp.factorial(-1).should.be.NaN;
			Mathp.factorial(1.01).should.be.NaN;
		});

		it('should return the proper factorial for positive integers', function() {
			Mathp.factorial(0).should.equal(1);
			Mathp.factorial(1).should.equal(1);
			Mathp.factorial(2).should.equal(2);
			Mathp.factorial(3).should.equal(6);
			Mathp.factorial(10).should.equal(3628800);
		});
	});

	describe('#roundToPrecision()', function() {
		it('should return NaN if the first argument is not a number', function() {
			Mathp.roundToPrecision(NaN, 2).should.be.NaN;
			Mathp.roundToPrecision('toto', 2).should.be.NaN;
			Mathp.roundToPrecision(undefined, 2).should.be.NaN;
		});

		it('should round to precision as expected', function() {
			Mathp.roundToPrecision(1, 0).should.equal(1);
			Mathp.roundToPrecision(1.5, 0).should.equal(2);
			Mathp.roundToPrecision(1.58, 1).should.equal(1.6);
			Mathp.roundToPrecision(1.58, 1.9).should.equal(1.6);
			Mathp.roundToPrecision(-1.8888, 2).should.equal(-1.89);
		});
	});

	describe('#euclideanModulo()', function() {
		it('should return NaN if any of the argument is NaN', function() {
			Mathp.euclideanModulo().should.be.NaN;
			Mathp.euclideanModulo(1, NaN).should.be.NaN;
			Mathp.euclideanModulo(NaN, 1).should.be.NaN;
			Mathp.euclideanModulo(1, 'toto').should.be.NaN;
			Mathp.euclideanModulo('toto', 1).should.be.NaN;
		});

		it('should return a positive value with a positive dividend and a positive divisor', function () {
			Mathp.euclideanModulo(5, 3).should.equal(2);
		});

		it('should return a positive value with a negative dividend and a positive divisor', function () {
			Mathp.euclideanModulo(-5, 3).should.equal(1);
		});

		it('should return a positive value with a positive dividend and a negative divisor', function () {
			Mathp.euclideanModulo(5, -3).should.equal(2);
		});

		it('should return a positive value with a negative dividend and a negative divisor', function () {
			Mathp.euclideanModulo(-5, -3).should.equal(1);
		});
	});

	describe('#flooredModulo()', function() {
		it('should return NaN if any of the argument is NaN', function() {
			Mathp.flooredModulo().should.be.NaN;
			Mathp.flooredModulo(1, NaN).should.be.NaN;
			Mathp.flooredModulo(NaN, 1).should.be.NaN;
			Mathp.flooredModulo(1, 'toto').should.be.NaN;
			Mathp.flooredModulo('toto', 1).should.be.NaN;
		});

		it('should return a positive value with a positive dividend and a positive divisor', function () {
			Mathp.flooredModulo(5, 3).should.equal(2);
		});

		it('should return a positive value with a negative dividend and a positive divisor', function () {
			Mathp.flooredModulo(-5, 3).should.equal(1);
		});

		it('should return a negative value with a positive dividend and a negative divisor', function () {
			Mathp.flooredModulo(5, -3).should.equal(-1);
		});

		it('should return a negative value with a negative dividend and a negative divisor', function () {
			Mathp.flooredModulo(-5, -3).should.equal(-2);
		});
	});

	describe('#truncatedModulo()', function() {
		it('should return NaN if any of the argument is NaN', function() {
			Mathp.truncatedModulo().should.be.NaN;
			Mathp.truncatedModulo(1, NaN).should.be.NaN;
			Mathp.truncatedModulo(NaN, 1).should.be.NaN;
			Mathp.truncatedModulo(1, 'toto').should.be.NaN;
			Mathp.truncatedModulo('toto', 1).should.be.NaN;
		});

		it('should return a positive value with a positive dividend and a positive divisor', function () {
			Mathp.truncatedModulo(5, 3).should.equal(2);
		});

		it('should return a negative value with a negative dividend and a positive divisor', function () {
			Mathp.truncatedModulo(-5, 3).should.equal(-2);
		});

		it('should return a positive value with a positive dividend and a negative divisor', function () {
			Mathp.truncatedModulo(5, -3).should.equal(2);
		});

		it('should return a negative value with a negative dividend and a negative divisor', function () {
			Mathp.truncatedModulo(-5, -3).should.equal(-2);
		});
	});
});
