var sinh = require('./sinh');

module.exports = function csch (value) {
    "use strict";

    return 1 / sinh(value);
};
