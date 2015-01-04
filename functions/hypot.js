module.exports = Math.hypot || function hypot (value1, value2) {
    "use strict";

    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
        if (arguments[i] === Infinity || arguments[i] === -Infinity) {
            return Infinity;
        }

        y += arguments[i] * arguments[i];
    }

    return Math.sqrt(y);
};
