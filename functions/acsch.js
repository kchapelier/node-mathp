var asinh = require('./asinh');

module.exports = function acsch (value) {
    "use strict";

    return asinh(1 / value);
};
