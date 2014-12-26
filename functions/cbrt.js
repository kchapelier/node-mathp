var sign = require('./sign');

module.exports = function cbrt (value) {
    "use strict";

    var y = Math.pow(Math.abs(value), 1 / 3);
    return y * sign(value);
};
