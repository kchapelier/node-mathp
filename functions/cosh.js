module.exports = Math.cosh || function cosh (value) {
    "use strict";

    var y = Math.exp(value);
    return (y + 1 / y) / 2;
};
