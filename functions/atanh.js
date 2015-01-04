var isNegativeZero = require('./isNegativeZero');

module.exports = Math.atanh || function atanh (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.log((1 + value) / (1 - value)) / 2;
    }
};
