/**
 * Returns the remainder of a truncated division, the result has the same sign as the dividend.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function truncatedModulo (dividend, divisor) {
    "use strict";

    return dividend % divisor;
};
