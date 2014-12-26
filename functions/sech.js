var cosh = require('./cosh');

module.exports = function sech (value) {
    "use strict";

    return 1 / cosh(value);
};
