module.exports = Math.imul || function imul (value1, value2) {
    "use strict";

    var ah = (value1 >>> 16) & 0xffff;
    var al = value1 & 0xffff;
    var bh = (value2 >>> 16) & 0xffff;
    var bl = value2 & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};
