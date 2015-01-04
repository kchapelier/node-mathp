module.exports = function manhattanDistanceN (point1, point2) {
    "use strict";

    var result = 0;

    if (point1.length !== point2.length) {
        result = NaN;
    } else {
        for (var i = 0; i < point1.length; i++) {
            result += Math.abs(point1[i] - point2[i]);
        }
    }

    return result;
};
