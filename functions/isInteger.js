var MAX_SAFE_INT = Math.pow(2, 53);

module.exports = Number.isInteger || function(val) {
    'use strict';
    return typeof val === 'number' &&
        val < MAX_SAFE_INT &&
        val > -MAX_SAFE_INT &&
        val % 1 === 0;
};