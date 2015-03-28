/**
 * Median of the values of an array
 * @param array
 * @returns {number} Median
 */
module.exports = function median (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return NaN;
        }
    }

    var mid = Math.floor(array.length / 2);

    array = array.slice(0).sort();

    if (array.length % 2) {
        return array[mid];
    } else {
        return (array[mid - 1] + array[mid]) / 2;
    }
};
