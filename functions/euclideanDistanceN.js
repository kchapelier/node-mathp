module.exports = function euclideanDistanceN (point1, point2) {
    "use strict";

    var result = 0;

    if (point1.length !== point2.length) {
        result = NaN;
    } else {
        for (var i = 0; i < point1.length; i++) {
            result += Math.pow(point1[i] - point2[i], 2);
        }

        result = Math.sqrt(result);
    }

    return result;
};
