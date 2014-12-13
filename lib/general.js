var general = {
    /**
     * Linear interpolation between two values
     * @param value1
     * @param value2
     * @param ratio
     * @returns {*}
     */
    lerp: function lerp (value1, value2, ratio) {
        "use strict";

        return ((value2 - value1) * this.limit(ratio, 0, 1)) + value1;
    },
    /**
     * Limit a value to given bounds (aka clamp)
     * @param value
     * @param min
     * @param max
     * @returns {*}
     */
    limit: function limit (value, min, max) {
        "use strict";

        if (min > max) {
            var bmin = max;
            max = min;
            min = bmin;
        }

        return this.max(this.min(value, max), min);
    },
    scale: function scale (value, min, max, dstMin, dstMax) {
        "use strict";

        value = (max === min ? 0 : (this.limit(value, min, max) - min) / (max - min));

        return value * (dstMax - dstMin) + dstMin;
    },
    sign1: function sign1 (value) {
        "use strict";

        if (this.isNaN(value)) {
            return NaN;
        } else if (value > 0 || this.isPositiveZero(value) || value === Infinity) {
            return 1;
        } else {
            return -1;
        }
    },
    copySign: function copySign (value, sign) {
        "use strict";

        return this.abs(value) * this.sign1(sign);
    },
    smoothstep: function smoothstep (min, max, value) {
        "use strict";

        value = this.scale(value, min, max, 0, 1);

        return value * value * (3 - 2 * value);
    },
    smootherstep: function smootherstep (min, max, value) {
        "use strict";

        value = this.scale(value, min, max, 0, 1);

        return value * value * value * (value * (value * 6 - 15) + 10);
    },
    step: function (step, value) {
        "use strict";

        if (isNaN(step) || isNaN(value)) {
            return NaN;
        }

        return (value >= step ? 1 : 0);
    },
    factorial: (function () {
        "use strict";

        var factorialCache = {
            0: 1,
            1: 1,
            2: 2,
            3: 6
        };

        var factorialFunc = function factorialFunc (value) {
            if (factorialCache[value]) {
                return factorialCache[value];
            } else {
                return (factorialCache[value] = factorialFunc(value - 1) * value);
            }
        };

        return function factorial (value) {
            if (isNaN(value) || value < 0 || value !== this.floor(value)) { //messy isInteger() and positive
                return NaN;
            }

            return factorialFunc(value);
        };
    }()),
    toPrecision: function (value, precision) {
        "use strict";

        return +Number(value).toPrecision(precision);
    },
    /**
     * Returns the remainder of an euclidean division, the result is always positive.
     * @param dividend
     * @param divisor
     * @returns {number}
     */
    euclideanModulo: function (dividend, divisor) {
        "use strict";

        divisor = Math.abs(divisor);

        return ((dividend % divisor) + divisor) % divisor;
    },
    /**
     * Returns the remainder of a floored division, the result has the same sign as the divisor.
     * @param dividend
     * @param divisor
     * @returns {number}
     */
    flooredModulo: function (dividend, divisor) {
        "use strict";

        return ((dividend % divisor) + divisor) % divisor;
    },
    /**
     * Returns the remainder of a truncated division, the result has the same sign as the dividend.
     * @param dividend
     * @param divisor
     * @returns {number}
     */
    truncatedModulo: function (dividend, divisor) {
        "use strict";

        return dividend % divisor;
    }
};

module.exports = general;
