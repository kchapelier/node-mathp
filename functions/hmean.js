/**
 * Harmonic mean of the values of an array
 * @param array
 * @returns {number} Harmonic mean
 */
module.exports = function hmean (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    var value = 0;
    for (var i = 0; i < array.length; i++) {
        value += 1 / array[i];
    }

    return array.length / value;
};
