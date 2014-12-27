module.exports = Math.fround || function fround (value) {
    "use strict";

    var f32 = new Float32Array(1);
    f32[0] = value;
    return f32[0];
};
