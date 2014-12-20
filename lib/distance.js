var distance = {
    euclideanDistance: function euclideanDistance (x1, y1, x2, y2) {
        "use strict";

        return this.sqrt(this.pow(x1 - x2, 2) + this.pow(y1 - y2, 2));
    },
    manhattanDistance: function manhattanDistance (x1, y1, x2, y2) {
        "use strict";

        return this.abs(x1 - x2) + this.abs(y1 - y2);
    },
    chebyshevDistance: function chebyshevDistance (x1, y1, x2, y2) {
        "use strict";

        return this.max(this.abs(x1 - x2), this.abs(y1 - y2));
    },
    minkowskiDistance: function minkowskiDistance (x1, y1, x2, y2, order) {
        "use strict";

        return this.pow(this.pow(this.abs(x1 - x2), order) + this.pow(this.abs(y1 - y2), order), 1 / order);
    },
    euclideanDistanceN: function euclideanDistanceN (point1, point2) {
        "use strict";

        var result = 0;

        if (point1.length !== point2.length) {
            result = NaN;
        } else {
            for (var i = 0; i < point1.length; i++) {
                result += this.pow(point1[i] - point2[i], 2);
            }

            result = this.sqrt(result);
        }

        return result;
    },
    manhattanDistanceN: function manhattanDistanceN (point1, point2) {
        "use strict";

        var result = 0;

        if (point1.length !== point2.length) {
            result = NaN;
        } else {
            for (var i = 0; i < point1.length; i++) {
                result += this.abs(point1[i] - point2[i]);
            }
        }

        return result;
    },
    chebyshevDistanceN: function chebyshevDistanceN (point1, point2) {
        "use strict";

        if (point1.length !== point2.length) {
            return NaN;
        }

        var result = 0;
        for (var i = 0; i < point1.length; i++) {
            result = this.max(result, this.abs(point1[i] - point2[i]));
        }

        return result;
    },
    minkowskiDistanceN: function minkowskiDistanceN (point1, point2, order) {
        "use strict";

        var result = 0;

        if (point1.length !== point2.length) {
            result = NaN;
        } else {
            for (var i = 0; i < point1.length; i++) {
                result += this.pow(this.abs(point1[i] - point2[i]), order);
            }

            result = this.pow(result, 1 / order);
        }

        return result;
    }
};

module.exports = distance;
