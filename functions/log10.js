module.exports = Math.log10 || function log10 (value) {
    "use strict";

    return Math.log(value) / Math.LN10;
};
