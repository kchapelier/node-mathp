var scale = require('./scale');

module.exports = function wshaper (value, min, max, shape) {
    "use strict";

    value = scale(value, min, max, 0, 1);
    value *= shape.length - 1;

    var start = Math.floor(value),
        pos = value % 1;

    if (start === shape.length - 1) {
        value = shape[start];
    } else {
        value = shape[start] * (1 - pos) + shape[start + 1] * (pos);
    }

    return value;
};
