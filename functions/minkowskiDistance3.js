module.exports = function minkowskiDistance3 (x1, y1, z1, x2, y2, z2, order) {
    "use strict";

    return Math.pow(Math.pow(Math.abs(x1 - x2), order) + Math.pow(Math.abs(y1 - y2), order) + Math.pow(Math.abs(z1 - z2), order), 1 / order);
};
