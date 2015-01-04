/**
 * Geometric mean of the values of an array
 * @param array
 * @returns {number} Geometric mean
 */
module.exports = function gmean (array) {
    "use strict";

    var value = 0;

    if (array && array.length > 0) {
        value = 1;

        for (var i = 0; i < array.length; i++) {
            value *= array[i];
        }

        value = Math.pow(value, 1 / array.length);
    }

    return value;
};
