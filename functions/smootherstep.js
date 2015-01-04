var scale = require('./scale');

module.exports = function smootherstep (min, max, value) {
    "use strict";

    value = scale(value, min, max, 0, 1);

    return value * value * value * (value * (value * 6 - 15) + 10);
};
