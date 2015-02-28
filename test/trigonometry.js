"use strict";

require('chai')
    .use(require('./plugin/chai-math'))
    .should();

var Mathp = require('../index.js');

describe('Trigonometry', function () {
    describe('#sinc()', function () {
        it('should return 1 for 0', function () {
            Mathp.sinc(0).should.equal(1);
        });

        it('should apply sinc correctly', function () {
            Mathp.sinc(Mathp.PI_2).should.equalFloat(0.6366197723675814);
            Mathp.sinc(3 * Mathp.PI_2).should.equalFloat(-0.2122065907891938);
        });
    });

    describe('#cot()', function () {
        it('should apply cot correcty', function () {
            Mathp.cot(-0).should.equal(-Infinity);
            Mathp.cot(0).should.equal(Infinity);

            Mathp.cot(1).should.equalFloat(0.6420926159343306);
            Mathp.cot(-1).should.equalFloat(-0.6420926159343306);

            Mathp.cot(Infinity).should.be.NaN;
            Mathp.cot(-Infinity).should.be.NaN;
            Mathp.cot(NaN).should.be.NaN;

            //Mathp.cot(Mathp.PI).should.equal(Infinity); in a perfect world with a perfect representation of PI
        });
    });

    describe('#sec()', function () {
        it('should apply sec correcty', function () {
            Mathp.sec(-0).should.equal(1);
            Mathp.sec(0).should.equal(1);

            Mathp.sec(1).should.equalFloat(1.8508157176809255);
            Mathp.sec(-1).should.equalFloat(1.8508157176809255);

            Mathp.sec(Infinity).should.be.NaN;
            Mathp.sec(-Infinity).should.be.NaN;
            Mathp.sec(NaN).should.be.NaN;

            Mathp.sec(Mathp.PI).should.equal(-1);
        });
    });

    describe('#csc()', function () {
        it('should apply csc correcty', function () {
            Mathp.csc(-0).should.equal(-Infinity);
            Mathp.csc(0).should.equal(Infinity);

            Mathp.csc(1).should.equalFloat(1.1883951057781212);
            Mathp.csc(-1).should.equalFloat(-1.1883951057781212);

            Mathp.csc(Infinity).should.be.NaN;
            Mathp.csc(-Infinity).should.be.NaN;
            Mathp.csc(NaN).should.be.NaN;

            Mathp.csc(Mathp.PI_2).should.equal(1);
        });
    });

    describe('#acot()', function () {
        it('should apply acot correcty', function () {
            Mathp.acot(-0).should.equal(-Mathp.PI_2);
            Mathp.acot(0).should.equal(Mathp.PI_2);

            Mathp.acot(1).should.equal(Mathp.PI_4);
            Mathp.acot(-1).should.equal(-Mathp.PI_4);

            Mathp.acot(Infinity).should.be.positiveZero;
            Mathp.acot(-Infinity).should.be.negativeZero;
            Mathp.acot(NaN).should.be.NaN;
        });
    });

    describe('#asec()', function () {
        it('should apply asec correcty', function () {
            Mathp.asec(-0).should.be.NaN;
            Mathp.asec(0).should.be.NaN;

            Mathp.asec(1).should.equal(0);
            Mathp.asec(-1).should.equal(Mathp.PI);

            Mathp.asec(Infinity).should.equal(Mathp.PI_2);
            Mathp.asec(-Infinity).should.equal(Mathp.PI_2);
            Mathp.asec(NaN).should.be.NaN;
        });
    });

    describe('#acsc()', function () {
        it('should apply acsc correcty', function () {
            Mathp.acsc(-0).should.be.NaN;
            Mathp.acsc(0).should.be.NaN;

            Mathp.acsc(1).should.equal(Mathp.PI_2);
            Mathp.acsc(-1).should.equal(-Mathp.PI_2);

            Mathp.acsc(Infinity).should.equal(0);
            Mathp.acsc(-Infinity).should.equal(0);
            Mathp.acsc(NaN).should.be.NaN;
        });
    });

    describe('#coth()', function () {
        it('should apply coth correcty', function () {
            Mathp.coth(-0).should.equal(-Infinity);
            Mathp.coth(0).should.equal(Infinity);

            Mathp.coth(1).should.equalFloat(1.3130352854993315);
            Mathp.coth(-1).should.equalFloat(-1.3130352854993315);

            Mathp.coth(Infinity).should.equal(1);
            Mathp.coth(-Infinity).should.equal(-1);
            Mathp.coth(NaN).should.be.NaN;
        });
    });

    describe('#sech()', function () {
        it('should apply sech correcty', function () {
            Mathp.sech(-0).should.equal(1);
            Mathp.sech(0).should.equal(1);

            Mathp.sech(1).should.equalFloat(0.6480542736638855);
            Mathp.sech(-1).should.equalFloat(0.6480542736638855);

            Mathp.sech(Infinity).should.be.positiveZero;
            Mathp.sech(-Infinity).should.be.positiveZero;
            Mathp.sech(NaN).should.be.NaN;
        });
    });

    describe('#csch()', function () {
        it('should apply csch correcty', function () {
            Mathp.csch(-0).should.equal(-Infinity);
            Mathp.csch(0).should.equal(Infinity);

            Mathp.csch(1).should.equalFloat(0.8509181282393216);
            Mathp.csch(-1).should.equalFloat(-0.8509181282393216);

            Mathp.csch(Infinity).should.be.positiveZero;
            Mathp.csch(-Infinity).should.be.negativeZero;
            Mathp.csch(NaN).should.be.NaN;
        });
    });

    describe('#acoth()', function () {
        it('should apply acoth correcty', function () {
            Mathp.acoth(-0).should.be.NaN;
            Mathp.acoth(0).should.be.NaN;

            Mathp.acoth(1).should.equal(Infinity);
            Mathp.acoth(-1).should.equal(-Infinity);

            Mathp.acoth(Infinity).should.be.positiveZero;
            Mathp.acoth(-Infinity).should.be.negativeZero;
            Mathp.acoth(NaN).should.be.NaN;
        });
    });

    describe('#asech()', function () {
        it('should apply asech correcty', function () {
            Mathp.asech(-0).should.be.NaN;
            Mathp.asech(0).should.be.Infinity;

            Mathp.asech(1).should.equal(0);
            Mathp.asech(-1).should.be.NaN;

            Mathp.asech(Infinity).should.be.NaN;
            Mathp.asech(-Infinity).should.be.NaN;
            Mathp.asech(NaN).should.be.NaN;
        });
    });

    describe('#acsch()', function () {
        it('should apply acsch correcty', function () {
            Mathp.acsch(-0).should.equal(-Infinity);
            Mathp.acsch(0).should.equal(Infinity);

            Mathp.acsch(1).should.equalFloat(0.8813735870195429);
            Mathp.acsch(-1).should.equalFloat(-0.8813735870195428);

            Mathp.acsch(Infinity).should.equal(0);
            Mathp.acsch(-Infinity).should.equal(0);
            Mathp.acsch(NaN).should.be.NaN;
        });
    });
});
