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
