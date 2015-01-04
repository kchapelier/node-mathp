var degreeRadianRatio = 180 / Math.PI;

module.exports = function toRadians (degrees) {
    "use strict";

    return degrees / degreeRadianRatio;
};
