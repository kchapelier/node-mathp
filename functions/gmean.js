/**
 * Geometric mean of the values of an array
 * @param array
 * @returns {number} Geometric mean
 */
module.exports = function gmean (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    var value = 1;
    for (var i = 0; i < array.length; i++) {
        value *= array[i];
    }

    return Math.pow(value, 1 / array.length);
};
