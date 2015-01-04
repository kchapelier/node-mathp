var degreeRadianRatio = 180 / Math.PI;

module.exports = function toDegrees (radians) {
    "use strict";

    return radians * degreeRadianRatio;
};
