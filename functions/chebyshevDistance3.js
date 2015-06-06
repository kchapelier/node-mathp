module.exports = function chebyshevDistance3 (x1, y1, z1, x2, y2, z2) {
    "use strict";

    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2), Math.abs(z1 - z2));
};
