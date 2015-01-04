# Mathp - Changelog

### 1.2.3 (2014.01.04) :

 * Much better performances overall by avoiding function bindings ( see [relevant issue](https://github.com/kchapelier/node-mathp/issues/4) ).
 * _Deep requires_ are now possible ( i.e. : `var dist = require('mathp/functions/euclideanDistance')` ).
 * Slightly more performant sign1 and clz32.
 * Added automatic tests on Node.js 0.11.x via Travis.

### 1.2.2 (2014.12.21) :

 * More performant chebyshevDistanceN.

### 1.2.1 (2014.12.14) :

 * More performant euclideanModulo.
 * Fix chebyshevDistanceN returning -Infinity in 0d edge case.

### 1.2.0 (2014.12.13) :

 * New implementations : roundToPrecision, euclideanModulo, flooredModulo and truncatedModulo.
 * Proper linting and codestyle check.

### 1.1.1 (2014.09.26) :

 * Get the generated build to use the UMD pattern.
 * Make properties read only.

### 1.1.0 (2014.09.13) :

 * New implementations : step, euclideanDistanceN, manhattanDistanceN, chebyshevDistanceN and minkowskiDistanceN.
 * Bind the methods to the object.
 * Add a generic build script which generate a single file CommonJS module (useful for Titanium on Android).

### 1.0.0 (2014/08/11) :

 * Fix hypot not having a length of 2 (as per spec).
 * Fix functions not being named.
 * Tested and confirmed to work on Titanium.
 * Declare stable.

### 0.6.0 (2014.07.24) :

 * New implementations : smoothstep, smootherstep, factorial, sinc, sec, csc, cot, asec, acsc, acot, sech, csch, coth, asech, acsch, acoth.
 * Added properties : PI_2, PI_4 and GOLDEN_RATIO.
 * isFinite() and isNaN() are now direct proxy of the builtin functions.

### 0.5.1 (2014.07.16) :

 * Fix the negative zero edge cases in the polyfills.

### 0.5.0 (2014.07.15) :

 * New implementations : isFinite, median.
 * Cleaner module loading.

### 0.4.0 (2014.07.11) :

 * New implementations : isZero, isPositiveZero, isNegativeZero, isInfinity, isPositiveInfinity, isNegativeInfinity, sign1 and copySign.
 * Fix major issue in wshaper().
