module.exports = function isPositiveZero (value) {
    "use strict";

    return value === 0 && 1 / value === Infinity;
};
