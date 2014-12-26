/**
 * Returns the remainder of an euclidean division, the result is always positive.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function euclideanModulo (dividend, divisor) {
    "use strict";

    var remainder = dividend % divisor;

    return remainder < 0 ? remainder + Math.abs(divisor) : remainder;
};
