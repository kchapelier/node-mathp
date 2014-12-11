var degreeRadianRatio = 180 / Math.PI;

var conversion = {
    toDegrees: function toDegrees (radians) {
        "use strict";

        return radians * degreeRadianRatio;
    },
    toRadians: function toRadians (degrees) {
        "use strict";

        return degrees / degreeRadianRatio;
    }
};

module.exports = conversion;
