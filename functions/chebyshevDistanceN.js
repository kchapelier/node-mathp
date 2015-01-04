module.exports = function chebyshevDistanceN (point1, point2) {
    "use strict";

    if (point1.length !== point2.length) {
        return NaN;
    }

    var result = 0;
    for (var i = 0; i < point1.length; i++) {
        result = Math.max(result, Math.abs(point1[i] - point2[i]));
    }

    return result;
};
