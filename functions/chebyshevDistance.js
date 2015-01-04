module.exports = function chebyshevDistance (x1, y1, x2, y2) {
    "use strict";

    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
};
