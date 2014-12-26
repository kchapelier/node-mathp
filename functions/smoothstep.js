var scale = require('./scale');

module.exports = function smoothstep (min, max, value) {
    "use strict";

    value = scale(value, min, max, 0, 1);

    return value * value * (3 - 2 * value);
};
