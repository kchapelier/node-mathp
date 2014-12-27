var polyfill = {
    acosh: require('../functions/acosh'),
    asinh: require('../functions/asinh'),
    atanh: require('../functions/atanh'),
    cbrt: require('../functions/cbrt'),
    clz32: require('../functions/clz32'),
    cosh: require('../functions/cosh'),
    expm1: require('../functions/expm1'),
    fround: require('../functions/fround'),
    hypot: require('../functions/hypot'),
    imul: require('../functions/imul'),
    log1p: require('../functions/log1p'),
    log10: require('../functions/log10'),
    log2: require('../functions/log2'),
    sign: require('../functions/sign'),
    sinh: require('../functions/sinh'),
    tanh: require('../functions/tanh'),
    trunc: require('../functions/trunc')
};

module.exports = polyfill;
