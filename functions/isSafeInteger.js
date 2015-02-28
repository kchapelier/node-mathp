var MAX_SAFE_INT = require('./../properties/max_safe_integer');

module.exports = Number.isSafeInteger || function (val) {
    "use strict";

    return typeof val === 'number' &&
        val < MAX_SAFE_INT &&
        val > -MAX_SAFE_INT &&
        val % 1 === 0;
};
