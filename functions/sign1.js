var isPositiveZero = require('./isPositiveZero');

module.exports = function sign1 (value) {
    "use strict";

    if (isNaN(value)) {
        return NaN;
    } else if (value > 0 || isPositiveZero(value) || value === Infinity) {
        return 1;
    } else {
        return -1;
    }
};
