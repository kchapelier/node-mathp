"use strict";

require('chai')
    .use(require('./plugin/chai-math'))
    .should();

var Mathp = require('../index.js');

describe('Distance', function () {
    describe('#euclideanDistance()', function () {
        it('should work correctly on all axis', function () {
            Mathp.euclideanDistance(0, 0, 0, 0).should.equal(0);
            Mathp.euclideanDistance(0, 0, 0, 1).should.equal(1);
            Mathp.euclideanDistance(0, 0, 1, 0).should.equal(1);
            Mathp.euclideanDistance(0, 0, 1, 1).should.equalFloat(1.4142135623730951);
            Mathp.euclideanDistance(0, 0, 0, -1).should.equal(1);
            Mathp.euclideanDistance(0, 0, -1, 0).should.equal(1);
            Mathp.euclideanDistance(0, 0, -1, -1).should.equalFloat(1.4142135623730951);
        });

        it('should works correctly with float values', function () {
            Mathp.euclideanDistance(2, 10.5, 2, 5).should.equal(5.5);
            Mathp.euclideanDistance(-10.2, -10, 10, 10).should.equalFloat(28.426044395940846);
        });
    });

    describe('#manhattanDistance()', function () {
        it('should work correctly on all axis', function () {
            Mathp.manhattanDistance(0, 0, 0, 0).should.equal(0);
            Mathp.manhattanDistance(0, 0, 0, 1).should.equal(1);
            Mathp.manhattanDistance(0, 0, 1, 0).should.equal(1);
            Mathp.manhattanDistance(0, 0, 1, 1).should.equal(2);
            Mathp.manhattanDistance(0, 0, 0, -1).should.equal(1);
            Mathp.manhattanDistance(0, 0, -1, 0).should.equal(1);
            Mathp.manhattanDistance(0, 0, -1, -1).should.equal(2);
        });

        it('should works correctly with float values', function () {
            Mathp.manhattanDistance(2, 10.5, 2, 5).should.equal(5.5);
            Mathp.manhattanDistance(-10.2, -10, 10, 10).should.equal(40.2);
        });
    });

    describe('#chebyshevDistance()', function () {
        it('should work correctly on all axis', function () {
            Mathp.chebyshevDistance(0, 0, 0, 0).should.equal(0);
            Mathp.chebyshevDistance(0, 0, 0, 1).should.equal(1);
            Mathp.chebyshevDistance(0, 0, 1, 0).should.equal(1);
            Mathp.chebyshevDistance(0, 0, 1, 1).should.equal(1);
            Mathp.chebyshevDistance(0, 0, 0, -1).should.equal(1);
            Mathp.chebyshevDistance(0, 0, -1, 0).should.equal(1);
            Mathp.chebyshevDistance(0, 0, -1, -1).should.equal(1);
        });

        it('should works correctly with float values', function () {
            Mathp.chebyshevDistance(2, 10.5, 2, 5).should.equal(5.5);
            Mathp.chebyshevDistance(-10.2, -10, 10, 10).should.equal(20.2);
        });
    });

    describe('#minkowskiDistance()', function () {
        it('should be the same as manhattan distance at order 1', function () {
            var minkowski = Mathp.minkowskiDistance.bind(Mathp),
                manhattan = Mathp.manhattanDistance.bind(Mathp);

            minkowski(1, 2, 2, 3, 1).should.equal(manhattan(1, 2, 2, 3));
            minkowski(1, 2, 5, 20, 1).should.equal(manhattan(1, 2, 5, 20));
        });

        it('should be the same as euclidean distance at order 2', function () {
            var minkowski = Mathp.minkowskiDistance.bind(Mathp),
                euclidean = Mathp.euclideanDistance.bind(Mathp);

            minkowski(1, 2, 2, 3, 2).should.equal(euclidean(1, 2, 2, 3));
            minkowski(1, 2, 5, 20, 2).should.equal(euclidean(1, 2, 5, 20));
        });

        it('should work correctly on all axis', function () {
            Mathp.minkowskiDistance(0, 0, 0, 0, 3).should.equal(0);
            Mathp.minkowskiDistance(0, 0, 0, 1, 3).should.equal(1);
            Mathp.minkowskiDistance(0, 0, 1, 0, 3).should.equal(1);
            Mathp.minkowskiDistance(0, 0, 1, 1, 3).should.equalFloat(1.2599210498948732);
            Mathp.minkowskiDistance(0, 0, 0, -1, 3).should.equal(1);
            Mathp.minkowskiDistance(0, 0, -1, 0, 3).should.equal(1);
            Mathp.minkowskiDistance(0, 0, -1, -1, 3).should.equalFloat(1.2599210498948732);
        });

        it('should works correctly with float values', function () {
            Mathp.minkowskiDistance(2, 10.5, 2, 5, 4).should.equal(5.5);
            Mathp.minkowskiDistance(-10, -10, 10, 10, 2.5).should.equalFloat(26.39015821545789);
        });
    });

    describe('#euclideanDistance3()', function () {
        it('should return the correct value', function () {
            Mathp.euclideanDistance3(3, 10, 0, 0, 5, 5).should.equalFloat(7.681145747868608);
        });
    });

    describe('#manhattanDistance3()', function () {
        it('should return the correct value', function () {
            Mathp.manhattanDistance3(3, 10, 0, 0, 5, 5).should.equalFloat(13);
        });
    });

    describe('#manhattanDistance3()', function () {
        it('should return the correct value', function () {
            Mathp.manhattanDistance3(3, 10, 0, 0, 5, 5).should.equal(13);
        });
    });

    describe('#chebyshevDistance3()', function () {
        it('should return the correct value', function () {
            Mathp.chebyshevDistance3(3, 10, 0, 0, 5, 5).should.equal(5);
        });
    });

    describe('#minkowskiDistance3()', function () {
        it('should return the correct value', function () {
            Mathp.minkowskiDistance3(3, 10, 0, 0, 5, 5, 1).should.equalFloat(13);
            Mathp.minkowskiDistance3(3, 10, 0, 0, 5, 5, 2).should.equalFloat(7.681145747868608);
            Mathp.minkowskiDistance3(3, 10, 0, 0, 5, 5, 5).should.equalFloat(5.787474367736346);
        });
    });

    describe('#euclideanDistanceN()', function () {
        it('should return NaN if the two arguments are not of the same length', function () {
            Mathp.euclideanDistanceN([1], [1, 0]).should.be.NaN;
            Mathp.euclideanDistanceN([1, 0], [0]).should.be.NaN;
        });

        it('should work correctly with 1D points', function () {
            Mathp.euclideanDistanceN([0], [0]).should.equal(0);
            Mathp.euclideanDistanceN([0], [1.5]).should.equal(1.5);
            Mathp.euclideanDistanceN([-3], [3]).should.equal(6);
        });

        it('should work correctly with 2D points', function () {
            Mathp.euclideanDistanceN([0, 0], [0, 0]).should.equal(0);
            Mathp.euclideanDistanceN([0, 0], [0, 1.5]).should.equal(1.5);
            Mathp.euclideanDistanceN([-10.2, -10], [10, 10]).should.equalFloat(28.426044395940846);
        });

        it('should work correctly with 3D points', function () {
            Mathp.euclideanDistanceN([0, 0, 0], [0, 0, 0]).should.equal(0);
            Mathp.euclideanDistanceN([0, 0, 0], [0, 0, 1.5]).should.equal(1.5);
            Mathp.euclideanDistanceN([3, 10, 0], [0, 5, 5]).should.equalFloat(7.681145747868608);
        });
    });

    describe('#manhattanDistanceN()', function () {
        it('should return NaN if the two arguments are not of the same length', function () {
            Mathp.manhattanDistanceN([1], [1, 0]).should.be.NaN;
            Mathp.manhattanDistanceN([1, 0], [0]).should.be.NaN;
        });

        it('should return 0 for 0D points', function () {
            Mathp.manhattanDistanceN([], []).should.equal(0);
        });

        it('should work correctly with 1D points', function () {
            Mathp.manhattanDistanceN([0], [0]).should.equal(0);
            Mathp.manhattanDistanceN([0], [1.5]).should.equal(1.5);
            Mathp.manhattanDistanceN([-3], [3]).should.equal(6);
        });

        it('should work correctly with 2D points', function () {
            Mathp.manhattanDistanceN([0, 0], [0, 0]).should.equal(0);
            Mathp.manhattanDistanceN([0, 0], [0, 1.5]).should.equal(1.5);
            Mathp.manhattanDistanceN([2, 10.5], [0, 5]).should.equal(7.5);
        });

        it('should work correctly with 3D points', function () {
            Mathp.manhattanDistanceN([0, 0, 0], [0, 0, 0]).should.equal(0);
            Mathp.manhattanDistanceN([0, 0, 0], [0, 0, 1.5]).should.equal(1.5);
            Mathp.manhattanDistanceN([3, 10, 0], [0, 5, 5]).should.equal(13);
        });
    });

    describe('#chebyshevDistanceN()', function () {
        it('should return NaN if the two arguments are not of the same length', function () {
            Mathp.chebyshevDistanceN([1], [1, 0]).should.be.NaN;
            Mathp.chebyshevDistanceN([1, 0], [0]).should.be.NaN;
        });

        it('should return 0 for 0D points', function () {
            Mathp.chebyshevDistanceN([], []).should.equal(0);
        });

        it('should work correctly with 1D points', function () {
            Mathp.chebyshevDistanceN([0], [0]).should.equal(0);
            Mathp.chebyshevDistanceN([0], [1.5]).should.equal(1.5);
            Mathp.chebyshevDistanceN([-3], [3]).should.equal(6);
        });

        it('should work correctly with 2D points', function () {
            Mathp.chebyshevDistanceN([0, 0], [0, 0]).should.equal(0);
            Mathp.chebyshevDistanceN([0, 0], [0, 1.5]).should.equal(1.5);
            Mathp.chebyshevDistanceN([2, 10.5], [0, 5]).should.equal(5.5);
        });

        it('should work correctly with 3D points', function () {
            Mathp.chebyshevDistanceN([0, 0, 0], [0, 0, 0]).should.equal(0);
            Mathp.chebyshevDistanceN([0, 0, 0], [0, 0, 1.5]).should.equal(1.5);
            Mathp.chebyshevDistanceN([3, 10, 0], [0, 5, 5]).should.equal(5);
        });
    });

    describe('#minkowskiDistanceN()', function () {
        it('should return NaN if the two arguments are not of the same length', function () {
            Mathp.minkowskiDistanceN([1], [1, 0], 3).should.be.NaN;
            Mathp.minkowskiDistanceN([1, 0], [0], 3).should.be.NaN;
        });

        it('should be the same as manhattan distance at order 1', function () {
            var minkowski = Mathp.minkowskiDistanceN,
                manhattan = Mathp.manhattanDistanceN;

            minkowski([1, 2], [2, 3], 1).should.equal(manhattan([1, 2], [2, 3]));
            minkowski([1, 2, 5, 20], [2, 3, 4, 6], 1).should.equal(manhattan([1, 2, 5, 20], [2, 3, 4, 6]));
        });

        it('should be the same as euclidean distance at order 2', function () {
            var minkowski = Mathp.minkowskiDistanceN,
                euclidean = Mathp.euclideanDistanceN;

            minkowski([1, 2], [2, 3], 2).should.equal(euclidean([1, 2], [2, 3]));
            minkowski([1, 2, 5, 20], [2, 3, 4, 6], 2).should.equal(euclidean([1, 2, 5, 20], [2, 3, 4, 6]));
        });

        it('should return 0 for 0D points', function () {
            Mathp.minkowskiDistanceN([], [], 3).should.equal(0);
        });

        it('should work correctly with 1D points', function () {
            Mathp.minkowskiDistanceN([0], [0], 3).should.equal(0);
            Mathp.minkowskiDistanceN([0], [1.5], 3).should.equalFloat(1.5);
            Mathp.minkowskiDistanceN([-3], [3], 3).should.equalFloat(6);
        });

        it('should work correctly with 2D points', function () {
            Mathp.minkowskiDistanceN([0, 0], [0, 0], 3).should.equal(0);
            Mathp.minkowskiDistanceN([0, 0], [0, 1.5], 3).should.equalFloat(1.5);
            Mathp.minkowskiDistanceN([2, 10.5], [0, 5], 3).should.equalFloat(5.586777904672785);
        });

        it('should work correctly with 3D points', function () {
            Mathp.minkowskiDistanceN([0, 0, 0], [0, 0, 0], 5).should.equal(0);
            Mathp.minkowskiDistanceN([0, 0, 0], [0, 0, 1.5], 5).should.equalFloat(1.5);
            Mathp.minkowskiDistanceN([3, 10, 0], [0, 5, 5], 5).should.equalFloat(5.787474367736346);
        });
    });
});
