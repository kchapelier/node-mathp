# Mathp - Changelog

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