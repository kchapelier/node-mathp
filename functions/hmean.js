/**
 * Harmonic mean of the values of an array
 * @param array
 * @returns {number} Harmonic mean
 */
module.exports = function hmean (array) {
    "use strict";

    var value = 0;

    if (array && array.length > 0) {
        value = 0;

        for (var i = 0; i < array.length; i++) {
            value += 1 / array[i];
        }

        value = array.length / value;
    }

    return value;
};
