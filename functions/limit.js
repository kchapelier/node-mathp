module.exports = function limit (value, min, max) {
    "use strict";

    if (min > max) {
        var bmin = max;
        max = min;
        min = bmin;
    }

    return Math.max(Math.min(value, max), min);
};
