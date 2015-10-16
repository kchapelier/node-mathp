# Mathp - Changelog

### 1.5.0 (2015.10.16) :

 * New implementation : fract.
 * Remove the test folder from the package downloaded from npm.
 * Updated dev dependencies.
 * Added automatic tests on the latest stable version of Node.js Travis.
 * Removed automatic tests on Node.js 0.10.x and iojs via Travis.

### 1.4.0 (2015.05.06) :

 * New implementations : euclideanDistance3, manhattanDistance3, chebyshevDistance3 and minkowskiDistance3 (much faster than the generic N dimensions functions).

### 1.3.2 (2015.03.28) :

 * Terseness refactor.

### 1.3.1 (2015.02.28) :

 * Add .editorconfig file.
 * Removed the builds and other unecessary files from the package download from npm.
 * Updated dev dependencies.
 * Added automatic tests on Node.js 0.12.x and io.js via Travis.
 * Removed automatic tests on Node.js 0.11.x via Travis.

### 1.3.0 (2015.02.03) :

 * New implementations : isInteger, isSafeInteger.

### 1.2.3 (2015.01.04) :

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
