/**
 * Root mean square of the values of an array
 * @param array
 * @returns {number}
 */
module.exports = function rms (array) {
    "use strict";

    var value = 0;

    if (array && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            value += array[i] * array[i];
        }

        value = Math.sqrt(value / array.length);
    }

    return value;
};
