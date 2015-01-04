/**
 * Arithmetic mean of the values of an array
 * @param array
 * @returns {number} Arithmetic mean
 */
module.exports = function amean (array) {
    "use strict";

    var value = 0;

    if (array && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            value += array[i];
        }

        value = value / array.length;
    }

    return value;
};
