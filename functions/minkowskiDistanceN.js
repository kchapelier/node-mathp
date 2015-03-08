module.exports = function minkowskiDistanceN (point1, point2, order) {
    "use strict";

    if (point1.length !== point2.length) {
        return NaN;
    }

    var result = 0;
    for (var i = 0; i < point1.length; i++) {
        result += Math.pow(Math.abs(point1[i] - point2[i]), order);
    }

    return Math.pow(result, 1 / order);
};
