var atanh = require('./atanh');

module.exports = function acoth (value) {
    "use strict";

    return atanh(1 / value);
};
