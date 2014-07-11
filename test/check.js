"use strict";

var should = require('chai').should();

var Mathp = require('../index.js');

describe('Check', function(){
	describe('#isNaN()', function() {
		it('', function() {
			Mathp.isNaN(0).should.be.false;
			Mathp.isNaN(-0).should.be.false;
			Mathp.isNaN(1).should.be.false;
			Mathp.isNaN(-1).should.be.false;
			Mathp.isNaN('0').should.be.false;
			Mathp.isNaN(Infinity).should.be.false;
			Mathp.isNaN(-Infinity).should.be.false;
			Mathp.isNaN(NaN).should.be.true;
			Mathp.isNaN('Toto').should.be.true;
		});
	});

	describe('#isZero()', function() {
		it('', function() {
			Mathp.isZero(0).should.be.true;
			Mathp.isZero(-0).should.be.true;
			Mathp.isZero(1).should.be.false;
			Mathp.isZero(-1).should.be.false;
			Mathp.isZero('0').should.be.false;
			Mathp.isZero(Infinity).should.be.false;
			Mathp.isZero(-Infinity).should.be.false;
			Mathp.isZero(NaN).should.be.false;
			Mathp.isZero('Toto').should.be.false;
		});
	});

	describe('#isPositiveZero()', function() {
		it('', function() {
			Mathp.isPositiveZero(0).should.be.true;
			Mathp.isPositiveZero(-0).should.be.false;
			Mathp.isPositiveZero(1).should.be.false;
			Mathp.isPositiveZero(-1).should.be.false;
			Mathp.isPositiveZero('0').should.be.false;
			Mathp.isPositiveZero(Infinity).should.be.false;
			Mathp.isPositiveZero(-Infinity).should.be.false;
			Mathp.isPositiveZero(NaN).should.be.false;
			Mathp.isPositiveZero('Toto').should.be.false;
		});
	});

	describe('#isNegativeZero()', function() {
		it('', function() {
			Mathp.isNegativeZero(0).should.be.false;
			Mathp.isNegativeZero(-0).should.be.true;
			Mathp.isNegativeZero(1).should.be.false;
			Mathp.isNegativeZero(-1).should.be.false;
			Mathp.isNegativeZero('0').should.be.false;
			Mathp.isNegativeZero(Infinity).should.be.false;
			Mathp.isNegativeZero(-Infinity).should.be.false;
			Mathp.isNegativeZero(NaN).should.be.false;
			Mathp.isNegativeZero('Toto').should.be.false;
		});
	});

	describe('#isInfinity()', function() {
		it('', function() {
			Mathp.isInfinity(0).should.be.false;
			Mathp.isInfinity(-0).should.be.false;
			Mathp.isInfinity(1).should.be.false;
			Mathp.isInfinity(-1).should.be.false;
			Mathp.isInfinity('0').should.be.false;
			Mathp.isInfinity(Infinity).should.be.true;
			Mathp.isInfinity(-Infinity).should.be.true;
			Mathp.isInfinity(NaN).should.be.false;
			Mathp.isInfinity('Toto').should.be.false;
		});
	});

	describe('#isPositiveInfinity()', function() {
		it('', function() {
			Mathp.isPositiveInfinity(0).should.be.false;
			Mathp.isPositiveInfinity(-0).should.be.false;
			Mathp.isPositiveInfinity(1).should.be.false;
			Mathp.isPositiveInfinity(-1).should.be.false;
			Mathp.isPositiveInfinity('0').should.be.false;
			Mathp.isPositiveInfinity(Infinity).should.be.true;
			Mathp.isPositiveInfinity(-Infinity).should.be.false;
			Mathp.isPositiveInfinity(NaN).should.be.false;
			Mathp.isPositiveInfinity('Toto').should.be.false;
		});
	});

	describe('#isNegativeInfinity()', function() {
		it('', function() {
			Mathp.isNegativeInfinity(0).should.be.false;
			Mathp.isNegativeInfinity(-0).should.be.false;
			Mathp.isNegativeInfinity(1).should.be.false;
			Mathp.isNegativeInfinity(-1).should.be.false;
			Mathp.isNegativeInfinity('0').should.be.false;
			Mathp.isNegativeInfinity(Infinity).should.be.false;
			Mathp.isNegativeInfinity(-Infinity).should.be.true;
			Mathp.isNegativeInfinity(NaN).should.be.false;
			Mathp.isNegativeInfinity('Toto').should.be.false;
		});
	});
});