var limit = require('./limit');

/**
 * Linear interpolation between two values
 * @param value1
 * @param value2
 * @param ratio
 * @returns {*}
 */
module.exports = function lerp (value1, value2, ratio) {
    "use strict";

    return ((value2 - value1) * limit(ratio, 0, 1)) + value1;
};
