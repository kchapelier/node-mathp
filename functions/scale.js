var limit = require('./limit');

module.exports = function scale (value, min, max, dstMin, dstMax) {
    "use strict";

    value = (max === min ? 0 : (limit(value, min, max) - min) / (max - min));

    return value * (dstMax - dstMin) + dstMin;
};
