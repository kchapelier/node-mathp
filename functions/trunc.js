module.exports = function trunc (value) {
    "use strict";

    return value < 0 ? Math.ceil(value) : Math.floor(value);
};
