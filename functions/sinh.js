var isNegativeZero = require('./isNegativeZero');

module.exports = function sinh (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        var y = Math.exp(value);
        return (y - 1 / y) / 2;
    }
};
