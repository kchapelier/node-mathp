(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Mathp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = Math.acosh || function acosh (value) {
    "use strict";

    return Math.log(value + Math.sqrt(value * value - 1));
};

},{}],2:[function(require,module,exports){
module.exports = function acot (value) {
    "use strict";

    return Math.atan(1 / value);
};

},{}],3:[function(require,module,exports){
var atanh = require('./atanh');

module.exports = function acoth (value) {
    "use strict";

    return atanh(1 / value);
};

},{"./atanh":10}],4:[function(require,module,exports){
module.exports = function acsc (value) {
    "use strict";

    return Math.asin(1 / value);
};

},{}],5:[function(require,module,exports){
var asinh = require('./asinh');

module.exports = function acsch (value) {
    "use strict";

    return asinh(1 / value);
};

},{"./asinh":9}],6:[function(require,module,exports){
/**
 * Arithmetic mean of the values of an array
 * @param array
 * @returns {number} Arithmetic mean
 */
module.exports = function amean (array) {
    "use strict";

    var value = 0;

    if (array && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            value += array[i];
        }

        value = value / array.length;
    }

    return value;
};

},{}],7:[function(require,module,exports){
module.exports = function asec (value) {
    "use strict";

    return Math.acos(1 / value);
};

},{}],8:[function(require,module,exports){
var acosh = require('./acosh');

module.exports = function asech (value) {
    "use strict";

    return acosh(1 / value);
};

},{"./acosh":1}],9:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.asinh || function asinh (value) {
    "use strict";

    if (value === -Infinity || isNegativeZero(value)) {
        return value;
    } else {
        return Math.log(value + Math.sqrt(value * value + 1));
    }
};

},{"./isNegativeZero":40}],10:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.atanh || function atanh (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.log((1 + value) / (1 - value)) / 2;
    }
};

},{"./isNegativeZero":40}],11:[function(require,module,exports){
var sign = require('./sign');

module.exports = Math.cbrt || function cbrt (value) {
    "use strict";

    var y = Math.pow(Math.abs(value), 1 / 3);
    return y * sign(value);
};

},{"./sign":62}],12:[function(require,module,exports){
module.exports = function chebyshevDistance (x1, y1, x2, y2) {
    "use strict";

    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
};

},{}],13:[function(require,module,exports){
module.exports = function chebyshevDistance3 (x1, y1, z1, x2, y2, z2) {
    "use strict";

    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2), Math.abs(z1 - z2));
};

},{}],14:[function(require,module,exports){
module.exports = function chebyshevDistanceN (point1, point2) {
    "use strict";

    if (point1.length !== point2.length) {
        return NaN;
    }

    var result = 0;
    for (var i = 0; i < point1.length; i++) {
        result = Math.max(result, Math.abs(point1[i] - point2[i]));
    }

    return result;
};

},{}],15:[function(require,module,exports){
module.exports = Math.clz32 || function clz32 (value) {
    "use strict";

    value = value >>> 0;
    return value ? 32 - value.toString(2).length : 32;
};

},{}],16:[function(require,module,exports){
var sign1 = require('./sign1');

module.exports = function copySign (value, sign) {
    "use strict";

    return Math.abs(value) * sign1(sign);
};

},{"./sign1":63}],17:[function(require,module,exports){
module.exports = Math.cosh || function cosh (value) {
    "use strict";

    var y = Math.exp(value);
    return (y + 1 / y) / 2;
};

},{}],18:[function(require,module,exports){
module.exports = function cot (value) {
    "use strict";

    return 1 / Math.tan(value);
};

},{}],19:[function(require,module,exports){
var tanh = require('./tanh');

module.exports = function coth (value) {
    "use strict";

    return 1 / tanh(value);
};

},{"./tanh":69}],20:[function(require,module,exports){
module.exports = function csc (value) {
    "use strict";

    return 1 / Math.sin(value);
};

},{}],21:[function(require,module,exports){
var sinh = require('./sinh');

module.exports = function csch (value) {
    "use strict";

    return 1 / sinh(value);
};

},{"./sinh":65}],22:[function(require,module,exports){
module.exports = function euclideanDistance (x1, y1, x2, y2) {
    "use strict";

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

},{}],23:[function(require,module,exports){
module.exports = function euclideanDistance3 (x1, y1, z1, x2, y2, z2) {
    "use strict";

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
};

},{}],24:[function(require,module,exports){
module.exports = function euclideanDistanceN (point1, point2) {
    "use strict";

    if (point1.length !== point2.length) {
        return NaN;
    }

    var result = 0;
    for (var i = 0; i < point1.length; i++) {
        result += Math.pow(point1[i] - point2[i], 2);
    }

    return Math.sqrt(result);
};

},{}],25:[function(require,module,exports){
/**
 * Returns the remainder of an euclidean division, the result is always positive.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function euclideanModulo (dividend, divisor) {
    "use strict";

    var remainder = dividend % divisor;

    return remainder < 0 ? remainder + Math.abs(divisor) : remainder;
};

},{}],26:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.expm1 || function expm1 (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.exp(value) - 1;
    }
};

},{"./isNegativeZero":40}],27:[function(require,module,exports){
var isInteger = require("./isInteger");

var factorialCache = {
    0: 1,
    1: 1,
    2: 2,
    3: 6
};

var factorialFunc = function factorialFunc (value) {
    "use strict";

    if (factorialCache[value]) {
        return factorialCache[value];
    } else {
        return (factorialCache[value] = factorialFunc(value - 1) * value);
    }
};

module.exports = function factorial (value) {
    "use strict";

    if (value < 0 || !isInteger(value)) {
        return NaN;
    }

    return factorialFunc(value);
};

},{"./isInteger":37}],28:[function(require,module,exports){
/**
 * Returns the remainder of a floored division, the result has the same sign as the divisor.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function flooredModulo (dividend, divisor) {
    "use strict";

    return ((dividend % divisor) + divisor) % divisor;
};

},{}],29:[function(require,module,exports){
module.exports = function fract (value) {
    "use strict";

    return value - Math.floor(value);
};

},{}],30:[function(require,module,exports){
module.exports = Math.fround || function fround (value) {
    "use strict";

    var f32 = new Float32Array(1);
    f32[0] = value;
    return f32[0];
};

},{}],31:[function(require,module,exports){
/**
 * Geometric mean of the values of an array
 * @param array
 * @returns {number} Geometric mean
 */
module.exports = function gmean (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    var value = 1;
    for (var i = 0; i < array.length; i++) {
        value *= array[i];
    }

    return Math.pow(value, 1 / array.length);
};

},{}],32:[function(require,module,exports){
/**
 * Harmonic mean of the values of an array
 * @param array
 * @returns {number} Harmonic mean
 */
module.exports = function hmean (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    var value = 0;
    for (var i = 0; i < array.length; i++) {
        value += 1 / array[i];
    }

    return array.length / value;
};

},{}],33:[function(require,module,exports){
module.exports = Math.hypot || function hypot (value1, value2) {
    "use strict";

    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
        if (arguments[i] === Infinity || arguments[i] === -Infinity) {
            return Infinity;
        }

        y += arguments[i] * arguments[i];
    }

    return Math.sqrt(y);
};

},{}],34:[function(require,module,exports){
module.exports = Math.imul || function imul (value1, value2) {
    "use strict";

    var ah = (value1 >>> 16) & 0xffff;
    var al = value1 & 0xffff;
    var bh = (value2 >>> 16) & 0xffff;
    var bl = value2 & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};

},{}],35:[function(require,module,exports){
module.exports = isFinite;

},{}],36:[function(require,module,exports){
module.exports = function isInfinity (value) {
    "use strict";

    return value === Infinity || value === -Infinity;
};

},{}],37:[function(require,module,exports){
module.exports = Number.isInteger || function (val) {
    "use strict";

    return typeof val === 'number' &&
        val % 1 === 0;
};

},{}],38:[function(require,module,exports){
module.exports = isNaN;

},{}],39:[function(require,module,exports){
module.exports = function isNegativeInfinity (value) {
    "use strict";

    return value === -Infinity;
};

},{}],40:[function(require,module,exports){
module.exports = function isNegativeZero (value) {
    "use strict";

    return value === 0 && 1 / value === -Infinity;
};

},{}],41:[function(require,module,exports){
module.exports = function isPositiveInfinity (value) {
    "use strict";

    return value === Infinity;
};

},{}],42:[function(require,module,exports){
module.exports = function isPositiveZero (value) {
    "use strict";

    return value === 0 && 1 / value === Infinity;
};

},{}],43:[function(require,module,exports){
var MAX_SAFE_INT = require('./../properties/max_safe_integer');

module.exports = Number.isSafeInteger || function (val) {
    "use strict";

    return typeof val === 'number' &&
        val < MAX_SAFE_INT &&
        val > -MAX_SAFE_INT &&
        val % 1 === 0;
};

},{"./../properties/max_safe_integer":77}],44:[function(require,module,exports){
module.exports = function isZero (value) {
    "use strict";

    return value === 0;
};

},{}],45:[function(require,module,exports){
var limit = require('./limit');

/**
 * Linear interpolation between two values
 * @param value1
 * @param value2
 * @param ratio
 * @returns {*}
 */
module.exports = function lerp (value1, value2, ratio) {
    "use strict";

    return ((value2 - value1) * limit(ratio, 0, 1)) + value1;
};

},{"./limit":46}],46:[function(require,module,exports){
/**
 * Limit a value to given bounds (aka clamp)
 * @param value
 * @param min
 * @param max
 * @returns {*}
 */
module.exports = function limit (value, min, max) {
    "use strict";

    if (min > max) {
        var bmin = max;
        max = min;
        min = bmin;
    }

    return Math.max(Math.min(value, max), min);
};

},{}],47:[function(require,module,exports){
module.exports = Math.log10 || function log10 (value) {
    "use strict";

    return Math.log(value) / Math.LN10;
};

},{}],48:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.log1p || function log1p (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        return Math.log(1 + value);
    }
};

},{"./isNegativeZero":40}],49:[function(require,module,exports){
module.exports = Math.log2 || function log2 (value) {
    "use strict";

    return Math.log(value) / Math.LN2;
};

},{}],50:[function(require,module,exports){
module.exports = function manhattanDistance (x1, y1, x2, y2) {
    "use strict";

    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

},{}],51:[function(require,module,exports){
module.exports = function manhattanDistance3 (x1, y1, z1, x2, y2, z2) {
    "use strict";

    return Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(z1 - z2);
};

},{}],52:[function(require,module,exports){
module.exports = function manhattanDistanceN (point1, point2) {
    "use strict";

    var result = 0;

    if (point1.length !== point2.length) {
        result = NaN;
    } else {
        for (var i = 0; i < point1.length; i++) {
            result += Math.abs(point1[i] - point2[i]);
        }
    }

    return result;
};

},{}],53:[function(require,module,exports){
/**
 * Median of the values of an array
 * @param array
 * @returns {number} Median
 */
module.exports = function median (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return NaN;
        }
    }

    var mid = Math.floor(array.length / 2);

    array = array.slice(0).sort();

    if (array.length % 2) {
        return array[mid];
    } else {
        return (array[mid - 1] + array[mid]) / 2;
    }
};

},{}],54:[function(require,module,exports){
module.exports = function minkowskiDistance (x1, y1, x2, y2, order) {
    "use strict";

    return Math.pow(Math.pow(Math.abs(x1 - x2), order) + Math.pow(Math.abs(y1 - y2), order), 1 / order);
};

},{}],55:[function(require,module,exports){
module.exports = function minkowskiDistance3 (x1, y1, z1, x2, y2, z2, order) {
    "use strict";

    return Math.pow(Math.pow(Math.abs(x1 - x2), order) + Math.pow(Math.abs(y1 - y2), order) + Math.pow(Math.abs(z1 - z2), order), 1 / order);
};

},{}],56:[function(require,module,exports){
module.exports = function minkowskiDistanceN (point1, point2, order) {
    "use strict";

    var result = 0;

    if (point1.length !== point2.length) {
        result = NaN;
    } else {
        for (var i = 0; i < point1.length; i++) {
            result += Math.pow(Math.abs(point1[i] - point2[i]), order);
        }

        result = Math.pow(result, 1 / order);
    }

    return result;
};

},{}],57:[function(require,module,exports){
/**
 * Root mean square of the values of an array
 * @param array
 * @returns {number}
 */
module.exports = function rms (array) {
    "use strict";

    if (!array || array.length <= 0) {
        return 0;
    }

    var value = 0;
    for (var i = 0; i < array.length; i++) {
        value += array[i] * array[i];
    }

    return Math.sqrt(value / array.length);
};

},{}],58:[function(require,module,exports){
module.exports = function roundToPrecision (value, precision) {
    "use strict";

    var factor = Math.pow(10, ~~precision);

    return Math.round(value * factor) / factor;
};

},{}],59:[function(require,module,exports){
var limit = require('./limit');

module.exports = function scale (value, min, max, dstMin, dstMax) {
    "use strict";

    value = (max === min ? 0 : (limit(value, min, max) - min) / (max - min));

    return value * (dstMax - dstMin) + dstMin;
};

},{"./limit":46}],60:[function(require,module,exports){
module.exports = function sec (value) {
    "use strict";

    return 1 / Math.cos(value);
};

},{}],61:[function(require,module,exports){
var cosh = require('./cosh');

module.exports = function sech (value) {
    "use strict";

    return 1 / cosh(value);
};

},{"./cosh":17}],62:[function(require,module,exports){
module.exports = Math.sign || function sign (value) {
    "use strict";

    if (isNaN(value)) {
        return NaN;
    } else if (value === 0) {
        return value;
    } else {
        return value > 0 ? 1 : -1;
    }
};

},{}],63:[function(require,module,exports){
var isPositiveZero = require('./isPositiveZero');

module.exports = function sign1 (value) {
    "use strict";

    if (isNaN(value)) {
        return NaN;
    } else if (value > 0 || isPositiveZero(value)) {
        return 1;
    } else {
        return -1;
    }
};

},{"./isPositiveZero":42}],64:[function(require,module,exports){
module.exports = function sinc (value) {
    "use strict";

    if (value === 0) {
        return 1;
    } else {
        return (Math.sin(value) / value);
    }
};

},{}],65:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.sinh || function sinh (value) {
    "use strict";

    if (isNegativeZero(value)) {
        return value;
    } else {
        var y = Math.exp(value);
        return (y - 1 / y) / 2;
    }
};

},{"./isNegativeZero":40}],66:[function(require,module,exports){
var scale = require('./scale');

module.exports = function smootherstep (min, max, value) {
    "use strict";

    value = scale(value, min, max, 0, 1);

    return value * value * value * (value * (value * 6 - 15) + 10);
};

},{"./scale":59}],67:[function(require,module,exports){
var scale = require('./scale');

module.exports = function smoothstep (min, max, value) {
    "use strict";

    value = scale(value, min, max, 0, 1);

    return value * value * (3 - 2 * value);
};

},{"./scale":59}],68:[function(require,module,exports){
module.exports = function step (edge, value) {
    "use strict";

    if (isNaN(edge) || isNaN(value)) {
        return NaN;
    }

    return (value >= edge ? 1 : 0);
};

},{}],69:[function(require,module,exports){
var isNegativeZero = require('./isNegativeZero');

module.exports = Math.tanh || function tanh (value) {
    "use strict";

    if (value === Infinity) {
        return 1;
    } else if (value === -Infinity) {
        return -1;
    } else if (isNegativeZero(value)) {
        return value;
    } else {
        var y = Math.exp(2 * value);
        return (y - 1) / (y + 1);
    }
};

},{"./isNegativeZero":40}],70:[function(require,module,exports){
var degreeRadianRatio = 180 / Math.PI;

module.exports = function toDegrees (radians) {
    "use strict";

    return radians * degreeRadianRatio;
};

},{}],71:[function(require,module,exports){
var degreeRadianRatio = 180 / Math.PI;

module.exports = function toRadians (degrees) {
    "use strict";

    return degrees / degreeRadianRatio;
};

},{}],72:[function(require,module,exports){
module.exports = Math.trunc || function trunc (value) {
    "use strict";

    return value < 0 ? Math.ceil(value) : Math.floor(value);
};

},{}],73:[function(require,module,exports){
/**
 * Returns the remainder of a truncated division, the result has the same sign as the dividend.
 * @param dividend
 * @param divisor
 * @returns {number}
 */
module.exports = function truncatedModulo (dividend, divisor) {
    "use strict";

    return dividend % divisor;
};

},{}],74:[function(require,module,exports){
var scale = require('./scale');

module.exports = function wshaper (value, min, max, shape) {
    "use strict";

    value = scale(value, min, max, 0, 1);
    value *= shape.length - 1;

    var start = Math.floor(value),
        pos = value % 1;

    if (start === shape.length - 1) {
        value = shape[start];
    } else {
        value = shape[start] * (1 - pos) + shape[start + 1] * (pos);
    }

    return value;
};

},{"./scale":59}],75:[function(require,module,exports){
/* Object elements retrieval */

var baseFunctions = {
    abs: Math.abs,
    acos: Math.acos,
    asin: Math.asin,
    atan: Math.atan,
    atan2: Math.atan2,
    ceil: Math.ceil,
    cos: Math.cos,
    exp: Math.exp,
    floor: Math.floor,
    log: Math.log,
    max: Math.max,
    min: Math.min,
    pow: Math.pow,
    random: Math.random,
    round: Math.round,
    sin: Math.sin,
    sqrt: Math.sqrt,
    tan: Math.tan
};

var baseProperties = {
    E: Math.E,
    PI: Math.PI,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    SQRT1_2: Math.SQRT1_2,
    SQRT2: Math.SQRT2
};

var polyfillFunctions = {
    acosh: require('./functions/acosh'),
    asinh: require('./functions/asinh'),
    atanh: require('./functions/atanh'),
    cbrt: require('./functions/cbrt'),
    clz32: require('./functions/clz32'),
    cosh: require('./functions/cosh'),
    expm1: require('./functions/expm1'),
    fround: require('./functions/fround'),
    hypot: require('./functions/hypot'),
    imul: require('./functions/imul'),
    log1p: require('./functions/log1p'),
    log10: require('./functions/log10'),
    log2: require('./functions/log2'),
    sign: require('./functions/sign'),
    sinh: require('./functions/sinh'),
    tanh: require('./functions/tanh'),
    trunc: require('./functions/trunc')
};

var additionalFunctions = {
    // checks
    isNaN: require('./functions/isNaN'),
    isInteger: require('./functions/isInteger'),
    isSafeInteger: require('./functions/isSafeInteger'),
    isZero: require('./functions/isZero'),
    isPositiveZero: require('./functions/isPositiveZero'),
    isNegativeZero: require('./functions/isNegativeZero'),
    isFinite: require('./functions/isFinite'),
    isInfinity: require('./functions/isInfinity'),
    isPositiveInfinity: require('./functions/isPositiveInfinity'),
    isNegativeInfinity: require('./functions/isNegativeInfinity'),

    //conversions
    toDegrees: require('./functions/toDegrees'),
    toRadians: require('./functions/toRadians'),

    //distances
    euclideanDistance: require('./functions/euclideanDistance'),
    manhattanDistance: require('./functions/manhattanDistance'),
    chebyshevDistance: require('./functions/chebyshevDistance'),
    minkowskiDistance: require('./functions/minkowskiDistance'),
    euclideanDistance3: require('./functions/euclideanDistance3'),
    manhattanDistance3: require('./functions/manhattanDistance3'),
    chebyshevDistance3: require('./functions/chebyshevDistance3'),
    minkowskiDistance3: require('./functions/minkowskiDistance3'),
    euclideanDistanceN: require('./functions/euclideanDistanceN'),
    manhattanDistanceN: require('./functions/manhattanDistanceN'),
    chebyshevDistanceN: require('./functions/chebyshevDistanceN'),
    minkowskiDistanceN: require('./functions/minkowskiDistanceN'),

    //general
    lerp: require('./functions/lerp'),
    limit: require('./functions/limit'),
    scale: require('./functions/scale'),
    sign1: require('./functions/sign1'),
    copySign: require('./functions/copySign'),
    smoothstep: require('./functions/smoothstep'),
    smootherstep: require('./functions/smootherstep'),
    step: require('./functions/step'),
    factorial: require('./functions/factorial'),
    roundToPrecision: require('./functions/roundToPrecision'),
    euclideanModulo: require('./functions/euclideanModulo'),
    flooredModulo: require('./functions/flooredModulo'),
    truncatedModulo: require('./functions/truncatedModulo'),
    wshaper: require('./functions/wshaper'),
    fract: require('./functions/fract'),

    //means
    rms: require('./functions/rms'),
    amean: require('./functions/amean'),
    gmean: require('./functions/gmean'),
    hmean: require('./functions/hmean'),
    median: require('./functions/median'),

    //trigonometry
    sinc: require('./functions/sinc'),
    cot: require('./functions/cot'),
    sec: require('./functions/sec'),
    csc: require('./functions/csc'),
    coth: require('./functions/coth'),
    sech: require('./functions/sech'),
    csch: require('./functions/csch'),
    acot:  require('./functions/acot'),
    asec:  require('./functions/asec'),
    acsc:  require('./functions/acsc'),
    acoth: require('./functions/acoth'),
    asech: require('./functions/asech'),
    acsch: require('./functions/acsch')
};

var additionalProperties = {
    PI_2: require('./properties/pi_2'),
    PI_4: require('./properties/pi_4'),
    GOLDEN_RATIO: require('./properties/golden_ratio'),
    MAX_SAFE_INTEGER: require('./properties/max_safe_integer')
};


/* Object composition */

var Mathp = {};

var importProperties = function (obj) {
    "use strict";

    var key, value;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];

            if (typeof value === 'function') {
                Mathp[key] = value;
            } else {
                Object.defineProperty(Mathp, key, {
                    enumerable: true,
                    writable: false,
                    value: value
                });
            }
        }
    }
};

importProperties(baseFunctions);
importProperties(baseProperties);
importProperties(polyfillFunctions);
importProperties(additionalFunctions);
importProperties(additionalProperties);


module.exports = Mathp;

},{"./functions/acosh":1,"./functions/acot":2,"./functions/acoth":3,"./functions/acsc":4,"./functions/acsch":5,"./functions/amean":6,"./functions/asec":7,"./functions/asech":8,"./functions/asinh":9,"./functions/atanh":10,"./functions/cbrt":11,"./functions/chebyshevDistance":12,"./functions/chebyshevDistance3":13,"./functions/chebyshevDistanceN":14,"./functions/clz32":15,"./functions/copySign":16,"./functions/cosh":17,"./functions/cot":18,"./functions/coth":19,"./functions/csc":20,"./functions/csch":21,"./functions/euclideanDistance":22,"./functions/euclideanDistance3":23,"./functions/euclideanDistanceN":24,"./functions/euclideanModulo":25,"./functions/expm1":26,"./functions/factorial":27,"./functions/flooredModulo":28,"./functions/fract":29,"./functions/fround":30,"./functions/gmean":31,"./functions/hmean":32,"./functions/hypot":33,"./functions/imul":34,"./functions/isFinite":35,"./functions/isInfinity":36,"./functions/isInteger":37,"./functions/isNaN":38,"./functions/isNegativeInfinity":39,"./functions/isNegativeZero":40,"./functions/isPositiveInfinity":41,"./functions/isPositiveZero":42,"./functions/isSafeInteger":43,"./functions/isZero":44,"./functions/lerp":45,"./functions/limit":46,"./functions/log10":47,"./functions/log1p":48,"./functions/log2":49,"./functions/manhattanDistance":50,"./functions/manhattanDistance3":51,"./functions/manhattanDistanceN":52,"./functions/median":53,"./functions/minkowskiDistance":54,"./functions/minkowskiDistance3":55,"./functions/minkowskiDistanceN":56,"./functions/rms":57,"./functions/roundToPrecision":58,"./functions/scale":59,"./functions/sec":60,"./functions/sech":61,"./functions/sign":62,"./functions/sign1":63,"./functions/sinc":64,"./functions/sinh":65,"./functions/smootherstep":66,"./functions/smoothstep":67,"./functions/step":68,"./functions/tanh":69,"./functions/toDegrees":70,"./functions/toRadians":71,"./functions/trunc":72,"./functions/truncatedModulo":73,"./functions/wshaper":74,"./properties/golden_ratio":76,"./properties/max_safe_integer":77,"./properties/pi_2":78,"./properties/pi_4":79}],76:[function(require,module,exports){
module.exports = (Math.sqrt(5) + 1) / 2;

},{}],77:[function(require,module,exports){
module.exports = 9007199254740991; // equivalent to Math.pow(2, 53) - 1;

},{}],78:[function(require,module,exports){
module.exports = Math.PI / 2;

},{}],79:[function(require,module,exports){
module.exports = Math.PI / 4;

},{}]},{},[75])(75)
});