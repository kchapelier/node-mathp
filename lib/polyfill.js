var polyfill = {
    acosh: function acosh (value) {
        "use strict";

        return this.log(value + this.sqrt(value * value - 1));
    },
    asinh: function asinh (value) {
        "use strict";

        if (value === -Infinity || this.isNegativeZero(value)) {
            return value;
        } else {
            return this.log(value + this.sqrt(value * value + 1));
        }
    },
    atanh: function atanh (value) {
        "use strict";

        if (this.isNegativeZero(value)) {
            return value;
        } else {
            return this.log((1 + value) / (1 - value)) / 2;
        }
    },
    cbrt: function cbrt (value) {
        "use strict";

        var y = this.pow(this.abs(value), 1 / 3);
        return y * this.sign(value);
    },
    clz32: function clz32 (value) {
        "use strict";

        value = Number(value) >>> 0;
        return value ? 32 - value.toString(2).length : 32;
    },
    cosh: function cosh (value) {
        "use strict";

        var y = this.exp(value);
        return (y + 1 / y) / 2;
    },
    expm1: function expm1 (value) {
        "use strict";

        if (this.isNegativeZero(value)) {
            return value;
        } else {
            return this.exp(value) - 1;
        }
    },
    fround: function fround (value) {
        "use strict";

        var f32 = new Float32Array(1);
        f32[0] = value;
        return f32[0];
    },
    hypot: function hypot (value1, value2) {
        "use strict";

        var y = 0;
        var length = arguments.length;

        for (var i = 0; i < length; i++) {
            if (arguments[i] === Infinity || arguments[i] === -Infinity) {
                return Infinity;
            }

            y += arguments[i] * arguments[i];
        }

        return this.sqrt(y);
    },
    imul: function imul (value1, value2) {
        "use strict";

        var ah = (value1 >>> 16) & 0xffff;
        var al = value1 & 0xffff;
        var bh = (value2 >>> 16) & 0xffff;
        var bl = value2 & 0xffff;
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
    },
    log1p: function log1p (value) {
        "use strict";

        if (this.isNegativeZero(value)) {
            return value;
        } else {
            return this.log(1 + value);
        }
    },
    log10: function log10 (value) {
        "use strict";

        return this.log(value) / this.LN10;
    },
    log2: function log2 (value) {
        "use strict";

        return this.log(value) / this.LN2;
    },
    sign: function sign (value) {
        "use strict";

        if (isNaN(value)) {
            return NaN;
        } else if (value === 0) {
            return value;
        } else {
            return value > 0 ? 1 : -1;
        }
    },
    sinh: function sinh (value) {
        "use strict";

        if (this.isNegativeZero(value)) {
            return value;
        } else {
            var y = this.exp(value);
            return (y - 1 / y) / 2;
        }
    },
    tanh: function tanh (value) {
        "use strict";

        if (value === Infinity) {
            return 1;
        } else if (value === -Infinity) {
            return -1;
        } else if (this.isNegativeZero(value)) {
            return value;
        } else {
            var y = this.exp(2 * value);
            return (y - 1) / (y + 1);
        }
    },
    trunc: function trunc (value) {
        "use strict";

        return value < 0 ? this.ceil(value) : this.floor(value);
    }
};

module.exports = polyfill;
