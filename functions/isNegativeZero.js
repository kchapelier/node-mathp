module.exports = function isNegativeZero (value) {
    "use strict";

    return value === 0 && 1 / value === -Infinity;
};
