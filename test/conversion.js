"use strict";

var should = require('chai').should();

var Mathp = require('../index.js');

//TODO more loose check on the float values as their precision is dependant of external factors

describe('Distance', function(){
	describe('#euclideanDistance()', function() {
		it('', function() {
			Mathp.euclideanDistance(0, 0, 0, 0).should.equal(0);
			Mathp.euclideanDistance(0, 0, 0, 1).should.equal(1);
			Mathp.euclideanDistance(0, 0, 1, 0).should.equal(1);
			Mathp.euclideanDistance(0, 0, 1, 1).should.equal(1.4142135623730951);
			Mathp.euclideanDistance(0, 0, 0, -1).should.equal(1);
			Mathp.euclideanDistance(0, 0, -1, 0).should.equal(1);
			Mathp.euclideanDistance(0, 0, -1, -1).should.equal(1.4142135623730951);
		});

		it('', function() {
			Mathp.euclideanDistance(2, 10.5, 2, 5).should.equal(5.5);
			Mathp.euclideanDistance(-10, -10, 10, 10).should.equal(28.284271247461902);
		});
	});

	describe('#manhattanDistance()', function() {
		it('', function() {
			Mathp.manhattanDistance(0, 0, 0, 0).should.equal(0);
			Mathp.manhattanDistance(0, 0, 0, 1).should.equal(1);
			Mathp.manhattanDistance(0, 0, 1, 0).should.equal(1);
			Mathp.manhattanDistance(0, 0, 1, 1).should.equal(2);
			Mathp.manhattanDistance(0, 0, 0, -1).should.equal(1);
			Mathp.manhattanDistance(0, 0, -1, 0).should.equal(1);
			Mathp.manhattanDistance(0, 0, -1, -1).should.equal(2);
		});

		it('', function() {
			Mathp.manhattanDistance(2, 10.5, 2, 5).should.equal(5.5);
			Mathp.manhattanDistance(-10, -10, 10, 10).should.equal(40);
		});
	});

	describe('#chebyshevDistance()', function() {
		it('', function() {
			Mathp.chebyshevDistance(0, 0, 0, 0).should.equal(0);
			Mathp.chebyshevDistance(0, 0, 0, 1).should.equal(1);
			Mathp.chebyshevDistance(0, 0, 1, 0).should.equal(1);
			Mathp.chebyshevDistance(0, 0, 1, 1).should.equal(1);
			Mathp.chebyshevDistance(0, 0, 0, -1).should.equal(1);
			Mathp.chebyshevDistance(0, 0, -1, 0).should.equal(1);
			Mathp.chebyshevDistance(0, 0, -1, -1).should.equal(1);
		});

		it('', function() {
			Mathp.chebyshevDistance(2, 10.5, 2, 5).should.equal(5.5);
			Mathp.chebyshevDistance(-10, -10, 10, 10).should.equal(20);
		});
	});
});