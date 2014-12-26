var isNegativeZero = require('./isNegativeZero');

module.exports = function expm1 (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.exp(value) - 1;
    }
};
