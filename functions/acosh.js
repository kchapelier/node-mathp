module.exports = function acosh (value) {
    "use strict";

    return Math.log(value + Math.sqrt(value * value - 1));
};
