module.exports = function step (step, value) {
    "use strict";

    if (isNaN(step) || isNaN(value)) {
        return NaN;
    }

    return (value >= step ? 1 : 0);
};
