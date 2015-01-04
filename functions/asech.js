var acosh = require('./acosh');

module.exports = function asech (value) {
    "use strict";

    return acosh(1 / value);
};
