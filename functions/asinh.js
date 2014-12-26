var isNegativeZero = require('./isNegativeZero');

module.exports = function asinh (value) {
    "use strict";

    if (value === -Infinity || isNegativeZero(value)) {
        return value;
    } else {
        return Math.log(value + Math.sqrt(value * value + 1));
    }
};
