module.exports = Math.log2 || function log2 (value) {
    "use strict";

    return Math.log(value) / Math.LN2;
};
