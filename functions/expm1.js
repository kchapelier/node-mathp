var isNegativeZero = require('./isNegativeZero');

module.exports = Math.expm1 || function expm1 (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.exp(value) - 1;
    }
};
