module.exports = Math.sign || function sign (value) {
    "use strict";

    if (isNaN(value)) {
        return NaN;
    } else if (value === 0) {
        return value;
    } else {
        return value > 0 ? 1 : -1;
    }
};
