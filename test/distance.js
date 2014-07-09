"use strict";

var should = require('chai').should();

var Mathp = require('../index.js');

describe('General', function(){
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
});