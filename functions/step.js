module.exports = function step (edge, value) {
    "use strict";

    if (isNaN(edge) || isNaN(value)) {
        return NaN;
    }

    return (value >= edge ? 1 : 0);
};
