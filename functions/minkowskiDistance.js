module.exports = function minkowskiDistance (x1, y1, x2, y2, order) {
    "use strict";

    return Math.pow(Math.pow(Math.abs(x1 - x2), order) + Math.pow(Math.abs(y1 - y2), order), 1 / order);
};
