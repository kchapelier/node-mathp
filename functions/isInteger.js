module.exports = Number.isInteger || function (val) {
    "use strict";

    return typeof val === 'number' &&
        val % 1 === 0;
};
