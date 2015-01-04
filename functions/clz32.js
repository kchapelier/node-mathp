module.exports = Math.clz32 || function clz32 (value) {
    "use strict";

    value = value >>> 0;
    return value ? 32 - value.toString(2).length : 32;
};
