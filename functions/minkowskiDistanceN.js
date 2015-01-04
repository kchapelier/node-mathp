module.exports = function minkowskiDistanceN (point1, point2, order) {
    "use strict";

    var result = 0;

    if (point1.length !== point2.length) {
        result = NaN;
    } else {
        for (var i = 0; i < point1.length; i++) {
            result += Math.pow(Math.abs(point1[i] - point2[i]), order);
        }

        result = Math.pow(result, 1 / order);
    }

    return result;
};
