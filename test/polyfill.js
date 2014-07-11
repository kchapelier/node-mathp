"use strict";

var should = require('chai').should();

var Mathp = require('../index.js');

//TODO more loose check on the float values as their precision is dependant of external factors
//TODO the checks for -0 are incorrect

describe('Polyfill', function(){
	describe('#acosh()', function() {
		it('must match the specifications', function() {
			Mathp.acosh(NaN).should.eql(NaN);
			Mathp.acosh(0).should.eql(NaN);
			Mathp.acosh(-0).should.eql(NaN);
			Mathp.acosh(1).should.equal(0);
			Mathp.acosh(-1).should.eql(NaN);
			Mathp.acosh(2).should.equal(1.3169578969248166);
			Mathp.acosh(Infinity).should.equal(Infinity);
			Mathp.acosh(-Infinity).should.eql(NaN);
		});
	});

	describe('#asinh()', function() {
		it('must match the specifications', function() {
			Mathp.asinh(NaN).should.eql(NaN);
			Mathp.asinh(0).should.equal(0);
			Mathp.asinh(-0).should.equal(-0);
			Mathp.asinh(1).should.closeTo(0.8813735870195429, 0.00000000000001);
			Mathp.asinh(-1).should.closeTo(-0.8813735870195429, 0.00000000000001);
			Mathp.asinh(Infinity).should.equal(Infinity);
			Mathp.asinh(-Infinity).should.equal(-Infinity);
		});
	});

	describe('#atanh()', function() {
		it('must match the specifications', function() {
			Mathp.atanh(NaN).should.eql(NaN);
			Mathp.atanh(0).should.equal(0);
			Mathp.atanh(-0).should.equal(-0);
			Mathp.atanh(0.5).should.equal(0.5493061443340549);
			Mathp.atanh(-0.5).should.equal(-0.5493061443340549);
			Mathp.atanh(1).should.equal(Infinity);
			Mathp.atanh(-1).should.equal(-Infinity);
			Mathp.atanh(1.2).should.eql(NaN);
			Mathp.atanh(-1.2).should.eql(NaN);
			Mathp.atanh(Infinity).should.eql(NaN);
			Mathp.atanh(-Infinity).should.eql(NaN);
		});
	});

	describe('#cbrt()', function() {
		it('must match the specifications', function () {
			Mathp.cbrt(NaN).should.eql(NaN);
			Mathp.cbrt(0).should.equal(0);
			Mathp.cbrt(-0).should.equal(-0);
			Mathp.cbrt(1).should.equal(1);
			Mathp.cbrt(-1).should.equal(-1);
			Mathp.cbrt(8).should.equal(2);
			Mathp.cbrt(-8).should.equal(-2);
			Mathp.cbrt(Infinity).should.equal(Infinity);
			Mathp.cbrt(-Infinity).should.equal(-Infinity);
		});
	});

	describe('#clz32()', function() {
		it('must match the specifications', function () {
			Mathp.clz32(1).should.equal(31);
			Mathp.clz32(1000).should.equal(22);
			Mathp.clz32().should.equal(32);
			Mathp.clz32(NaN).should.equal(32);
			Mathp.clz32("toto").should.equal(32);
			Mathp.clz32(Infinity).should.equal(32);
			Mathp.clz32(-Infinity).should.equal(32);
			Mathp.clz32(true).should.equal(31);
			Mathp.clz32(3.5).should.equal(30);
			Mathp.clz32(-100).should.equal(0);
		});
	});

	describe('#cosh()', function() {
		it('must match the specifications', function() {
			Mathp.cosh(NaN).should.eql(NaN);
			Mathp.cosh(0).should.equal(1);
			Mathp.cosh(-0).should.equal(1);
			Mathp.cosh(1).should.equal(1.5430806348152437);
			Mathp.cosh(-1).should.equal(1.5430806348152437);
			Mathp.cosh(Infinity).should.equal(Infinity);
			Mathp.cosh(-Infinity).should.equal(Infinity);
		});
	});

	describe('#expm1', function() {
		it('must match the specifications', function() {
			Mathp.expm1(NaN).should.eql(NaN);
			Mathp.expm1(0).should.equal(0);
			Mathp.expm1(-0).should.equal(-0);
			Mathp.expm1(1).should.equal(1.718281828459045);
			Mathp.expm1(-1).should.equal(-0.6321205588285577);
			Mathp.expm1(Infinity).should.equal(Infinity);
			Mathp.expm1(-Infinity).should.equal(-1);
		});
	});

	describe('#fround', function() {
		it('must match the specifications', function() {
			Mathp.fround(0).should.equal(0);    // 0
			Mathp.fround(1).should.equal(1);     // 1
			Mathp.fround(1.337).should.equal(1.3370000123977661);
			Mathp.fround(1.5).should.equal(1.5);
			Mathp.fround(NaN).should.eql(NaN);
		});
	});

	describe('#hypot', function() {
		it('must match the specifications', function() {
			Mathp.hypot().should.equal(0);
			Mathp.hypot(1, Infinity).should.equal(Infinity);
			Mathp.hypot(1, -Infinity).should.equal(Infinity);
			Mathp.hypot(1, 2, 3).should.equal(3.7416573867739413);
			Mathp.hypot(1, "toto").should.eql(NaN);
			Mathp.hypot(1, "toto", -Infinity).should.equal(Infinity);
			Mathp.hypot(0, 0, -0).should.equal(0);
		});
	});

	describe('#imul', function() {
		it('must match the specifications', function() {
			Mathp.imul(2, 4).should.equal(8);
			Mathp.imul(-1, 8).should.equal(-8);
			Mathp.imul(-2, -2).should.equal(4);
			Mathp.imul(0xffffffff, 5).should.equal(-5);
			Mathp.imul(0xfffffffe, 5).should.equal(-10);
		});
	});

	describe('#log1p', function() {
		it('must match the specifications', function() {
			Mathp.log1p(NaN).should.eql(NaN);
			Mathp.log1p(0).should.equal(0);
			Mathp.log1p(-0).should.equal(-0);
			Mathp.log1p(1).should.equal(0.6931471805599453);
			Mathp.log1p(-1).should.equal(-Infinity);
			Mathp.log1p(-1.5).should.eql(NaN);
			Mathp.log1p(Infinity).should.equal(Infinity);
			Mathp.log1p(-Infinity).should.eql(NaN);
		});
	});

	describe('#log10', function() {
		it('must match the specifications', function() {
			Mathp.log10(NaN).should.eql(NaN);
			Mathp.log10(0).should.equal(-Infinity);
			Mathp.log10(-0).should.equal(-Infinity);
			Mathp.log10(1).should.equal(0);
			Mathp.log10(-1).should.eql(NaN);
			Mathp.log10(8).should.equal(0.9030899869919434);
			Mathp.log10(Infinity).should.equal(Infinity);
			Mathp.log10(-Infinity).should.eql(NaN);
		});
	});

	describe('#log2', function() {
		it('must match the specifications', function() {
			Mathp.log2(NaN).should.eql(NaN);
			Mathp.log2(0).should.equal(-Infinity);
			Mathp.log2(-0).should.equal(-Infinity);
			Mathp.log2(1).should.equal(0);
			Mathp.log2(-1).should.eql(NaN);
			Mathp.log2(8).should.equal(3);
			Mathp.log2(Infinity).should.equal(Infinity);
			Mathp.log2(-Infinity).should.eql(NaN);
		});
	});

	describe('#sign()', function() {
		it('must match the specifications', function() {
			Mathp.sign(3).should.equal(1);
			Mathp.sign(-3).should.equal(-1);
			Mathp.sign("-3").should.equal(-1);
			Mathp.sign(0).should.equal(0);
			Mathp.sign(-0).should.equal(-0);
			Mathp.sign(NaN).should.eql(NaN);
			Mathp.sign("foo").should.eql(NaN);
			Mathp.sign().should.eql(NaN);
			Mathp.sign(Infinity).should.equal(1);
			Mathp.sign(-Infinity).should.equal(-1);
		});
	});

	describe('#sinh()', function() {
		it('must match the specifications', function() {
			Mathp.sinh(NaN).should.eql(NaN);
			Mathp.sinh(0).should.equal(0);
			Mathp.sinh(-0).should.equal(-0);
			Mathp.sinh(1).should.equal(1.1752011936438014);
			Mathp.sinh(-1).should.equal(-1.1752011936438014);
			Mathp.sinh(Infinity).should.equal(Infinity);
			Mathp.sinh(-Infinity).should.equal(-Infinity);
		});
	});

	describe('#tanh()', function() {
		it('must match the specifications', function() {
			Mathp.tanh(NaN).should.eql(NaN);
			Mathp.tanh(0).should.equal(0);
			Mathp.tanh(-0).should.equal(-0);
			Mathp.tanh(1).should.equal(0.7615941559557649);
			Mathp.tanh(-1).should.equal(-0.7615941559557649);
			Mathp.tanh(Infinity).should.equal(1);
			Mathp.tanh(-Infinity).should.equal(-1);
		});
	});

	describe('#trunc()', function() {
		it('must match the specifications', function() {
			Mathp.trunc(13.37).should.equal(13);
			Mathp.trunc(42.84).should.equal(42);
			Mathp.trunc(0.123).should.equal(0);
			Mathp.trunc(-0.123).should.equal(-0);
			Mathp.trunc("-1.123").should.equal(-1);
			Mathp.trunc(NaN).should.eql(NaN);
			Mathp.trunc("foo").should.eql(NaN);
			Mathp.trunc().should.eql(NaN);
		});
	});
});