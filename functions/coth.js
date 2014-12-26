var tanh = require('./tanh');

module.exports = function coth (value) {
    "use strict";

    return 1 / tanh(value);
};
