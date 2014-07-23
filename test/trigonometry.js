"use strict";

var chai = require('chai');
chai.use(require('./plugin/chai-math'));
var should = chai.should();

var Mathp = require('../index.js');

describe('Trigonometry', function(){
	describe('#sinc()', function() {
		it('should return 1 for 0', function() {
			Mathp.sinc(0).should.equal(1);
		});

		it('should apply sinc correctly', function() {
			Mathp.sinc(Mathp.PI / 2).should.equal(0.6366197723675814);
			Mathp.sinc(3 * Mathp.PI / 2).should.equal(-0.2122065907891938);
		});
	});
});