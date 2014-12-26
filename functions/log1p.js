var isNegativeZero = require('./isNegativeZero');

module.exports = function log1p (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.log(1 + value);
    }
};
