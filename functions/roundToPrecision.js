module.exports = function roundToPrecision (value, precision) {
    "use strict";

    var factor = Math.pow(10, ~~precision);

    return Math.round(value * factor) / factor;
};
