"use strict";

require('chai')
    .use(require('./plugin/chai-math'))
    .should();

var Mathp = require('../index.js');

describe('Check', function(){
    describe('#isNaN()', function() {
        it('should return true when the argument is not equivalent to a number', function() {
            Mathp.isNaN(NaN).should.be.true;
            Mathp.isNaN('Toto').should.be.true;
        });

        it('should return false when the argument is equivalent to a number', function() {
            Mathp.isNaN(0).should.be.false;
            Mathp.isNaN(-0).should.be.false;
            Mathp.isNaN(1).should.be.false;
            Mathp.isNaN(-1).should.be.false;
            Mathp.isNaN('0').should.be.false;
            Mathp.isNaN(Infinity).should.be.false;
            Mathp.isNaN(-Infinity).should.be.false;
        });
    });

    describe('#isInteger()', function() {
        it('should return false when the argument is not a number', function() {
            Mathp.isInteger(NaN).should.be.false;
            Mathp.isInteger('Toto').should.be.false;
            Mathp.isInteger('5').should.be.false;
            Mathp.isInteger(null).should.be.false;
            Mathp.isInteger(undefined).should.be.false;
        });

        it('should return false when the argument is infinite', function() {
            Mathp.isInteger(Infinity).should.be.false;
            Mathp.isInteger(-Infinity).should.be.false;
        });

        it('should return false when the argument is a float', function() {
            Mathp.isInteger(0.1).should.be.false;
            Mathp.isInteger(-0.2).should.be.false;
            Mathp.isInteger(-32432890823773.2).should.be.false;
        });

        it('should return true when the argument is an integer', function() {
            Mathp.isInteger(5).should.be.true;
            Mathp.isInteger(-Math.pow(2, 52)).should.be.true;
            Mathp.isInteger(Math.pow(2, 52) + 5000).should.be.true;
        });

        it('should return false when the argument is greater Math.abs(2^53))', function() {
            Mathp.isInteger(-9007199254740992).should.be.false;
            Mathp.isInteger(9007199254740992).should.be.false;
            Mathp.isInteger(-900719925472423408).should.be.false;
        });
    });

    describe('#isZero()', function() {
        it('should return true when the argument is 0', function() {
            Mathp.isZero(0).should.be.true;
            Mathp.isZero(-0).should.be.true;
        });

        it('should return false when the argument is not 0', function() {
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
        it('should return true when the argument is (+)0', function() {
            Mathp.isPositiveZero(0).should.be.true;
        });

        it('should return false when the argument is not (+)0', function() {
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
        it('should return true when the argument is (-)0', function() {
            Mathp.isNegativeZero(-0).should.be.true;
        });

        it('should return false when the argument is not (-)0', function() {
            Mathp.isNegativeZero(0).should.be.false;
            Mathp.isNegativeZero(1).should.be.false;
            Mathp.isNegativeZero(-1).should.be.false;
            Mathp.isNegativeZero('0').should.be.false;
            Mathp.isNegativeZero(Infinity).should.be.false;
            Mathp.isNegativeZero(-Infinity).should.be.false;
            Mathp.isNegativeZero(NaN).should.be.false;
            Mathp.isNegativeZero('Toto').should.be.false;
        });
    });

    describe('#isFinite()', function() {
        it('should return true when the argument is a number (and not Infinity)', function() {
            Mathp.isFinite(0).should.be.true;
            Mathp.isFinite(-0).should.be.true;
            Mathp.isFinite(1).should.be.true;
            Mathp.isFinite(-1).should.be.true;
            Mathp.isFinite('0').should.be.true;
        });

        it('should return false when the argument is not a number (or Infinity)', function() {
            Mathp.isNegativeZero(Infinity).should.be.false;
            Mathp.isNegativeZero(-Infinity).should.be.false;
            Mathp.isNegativeZero(NaN).should.be.false;
            Mathp.isNegativeZero('Toto').should.be.false;
        });
    });

    describe('#isInfinity()', function() {
        it('should return true when the argument is Infinity', function() {
            Mathp.isInfinity(Infinity).should.be.true;
            Mathp.isInfinity(-Infinity).should.be.true;
        });

        it('should return false when the argument is not Infinity', function() {
            Mathp.isInfinity(0).should.be.false;
            Mathp.isInfinity(-0).should.be.false;
            Mathp.isInfinity(1).should.be.false;
            Mathp.isInfinity(-1).should.be.false;
            Mathp.isInfinity('0').should.be.false;
            Mathp.isInfinity(NaN).should.be.false;
            Mathp.isInfinity('Toto').should.be.false;
        });
    });

    describe('#isPositiveInfinity()', function() {
        it('should return true when the argument is (+)Infinity', function() {
            Mathp.isPositiveInfinity(Infinity).should.be.true;
        });

        it('should return false when the argument is not (+)Infinity', function() {
            Mathp.isPositiveInfinity(0).should.be.false;
            Mathp.isPositiveInfinity(-0).should.be.false;
            Mathp.isPositiveInfinity(1).should.be.false;
            Mathp.isPositiveInfinity(-1).should.be.false;
            Mathp.isPositiveInfinity('0').should.be.false;
            Mathp.isPositiveInfinity(-Infinity).should.be.false;
            Mathp.isPositiveInfinity(NaN).should.be.false;
            Mathp.isPositiveInfinity('Toto').should.be.false;
        });
    });

    describe('#isNegativeInfinity()', function() {
        it('should return true when the argument is (-)Infinity', function() {
            Mathp.isNegativeInfinity(-Infinity).should.be.true;
        });

        it('should return false when the argument is not (-)Infinity', function() {
            Mathp.isNegativeInfinity(0).should.be.false;
            Mathp.isNegativeInfinity(-0).should.be.false;
            Mathp.isNegativeInfinity(1).should.be.false;
            Mathp.isNegativeInfinity(-1).should.be.false;
            Mathp.isNegativeInfinity('0').should.be.false;
            Mathp.isNegativeInfinity(Infinity).should.be.false;
            Mathp.isNegativeInfinity(NaN).should.be.false;
            Mathp.isNegativeInfinity('Toto').should.be.false;
        });
    });
});