module.exports = function euclideanDistance (x1, y1, x2, y2) {
    "use strict";

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
