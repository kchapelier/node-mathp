/**
 * Returns the remainder of a floored division, the result has the same sign as the divisor.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function flooredModulo (dividend, divisor) {
    "use strict";

    return ((dividend % divisor) + divisor) % divisor;
};
