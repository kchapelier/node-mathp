module.exports = function sinc (value) {
    "use strict";

    if (value === 0) {
        return 1;
    } else {
        return (Math.sin(value) / value);
    }
};
