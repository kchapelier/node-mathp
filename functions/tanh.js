var isNegativeZero = require('./isNegativeZero');

module.exports = Math.tanh || function tanh (value) {
    "use strict";

    if (value === Infinity) {
        return 1;
    } else if (value === -Infinity) {
        return -1;
    } else if (isNegativeZero(value)) {
        return value;
    } else {
        var y = Math.exp(2 * value);
        return (y - 1) / (y + 1);
    }
};
