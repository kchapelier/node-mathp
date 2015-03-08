module.exports = function euclideanDistanceN (point1, point2) {
    "use strict";

    if (point1.length !== point2.length) {
        return NaN;
    }

    var result = 0;
    for (var i = 0; i < point1.length; i++) {
        result += Math.pow(point1[i] - point2[i], 2);
    }

    return Math.sqrt(result);
};
