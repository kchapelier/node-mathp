var isInteger = require("./isInteger");

var factorialCache = {
    0: 1,
    1: 1,
    2: 2,
    3: 6
};

var factorialFunc = function factorialFunc (value) {
    "use strict";

    if (factorialCache[value]) {
        return factorialCache[value];
    } else {
        return (factorialCache[value] = factorialFunc(value - 1) * value);
    }
};

module.exports = function factorial (value) {
    "use strict";

    if (value < 0 || !isInteger(value)) {
        return NaN;
    }

    return factorialFunc(value);
};
