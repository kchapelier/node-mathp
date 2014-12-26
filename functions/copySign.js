var sign1 = require('./sign1');

module.exports = function copySign (value, sign) {
    "use strict";

    return Math.abs(value) * sign1(sign);
};
