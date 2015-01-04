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

    if (isNaN(value) || value < 0 || value !== Math.floor(value)) { //messy isInteger() and positive
        return NaN;
    }

    return factorialFunc(value);
};
