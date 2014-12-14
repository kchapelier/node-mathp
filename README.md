Mathp
=====

[![Build Status](https://travis-ci.org/kchapelier/node-mathp.svg)](https://travis-ci.org/kchapelier/node-mathp) [![NPM version](https://badge.fury.io/js/mathp.svg)](http://badge.fury.io/js/mathp)

Math utility for node

## Installing and testing

With [npm](http://npmjs.org) do:

```
npm install mathp
```

To run the test suite, run the following command from the mathp directory:

```
npm test
```

## Features

* Can be used as a drop-in replacement for the Math object.
* Provide implementations of missing ES6 methods.
* Doesn't modify the actual Math object.
* Doesn't modify the Number prototype or rely on boxing of any kind.
* Works in Titanium.

## Current methods

### Polyfills

* [acosh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh)
* [asinh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh)
* [atanh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh)
* [cbrt(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt)
* [clz32(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32)
* [cosh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh)
* [fround(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)
* [hypot(value1, value2, ...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
* [imul(value1, value2)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)
* [log1p(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p)
* [log10(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)
* [log2(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2)
* [sign(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
* [sinh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh)
* [tanh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)
* [trunc(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

All polyfills are tested with mocha+chai against the specifications described by the 25th revision of the draft for the 6th
Edition of the ECMAScript Language to ensure optimal compliance.

### Additional methods

#### General

* sign1(value)
* copySign(value, sign)
* lerp(value1, value2, ratio)
* limit(value, min, max)
* scale(value, origMin, origMax, destMin, destMax)
* factorial(value)
* step(step, value)
* smoothstep(min, max, value)
* smootherstep(min, max, value)
* roundToPrecision(number, precision)
* euclideanModulo(dividend, divisor)
* flooredModulo(dividend, divisor)
* truncatedModulo(dividend, divisor)

#### Distance

* euclideanDistance(x1, y1, x2, y2) : [Euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance)
* euclideanDistanceN(point1, point2) : Euclidean distance for N dimension(s)
* manhattanDistance(x1, y1, x2, y2) : [Manhattan distance](http://en.wikipedia.org/wiki/Manhattan_distance)
* manhattanDistanceN(point1, point2) : Manhattan distance for N dimension(s)
* chebyshevDistance(x1, y1, x2, y2) : [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance)
* chebyshevDistanceN(point1, point2) : Chebyshev distance for N dimension(s)
* minkowskiDistance(x1, y1, x2, y2, p) : [Minkowski distance](http://en.wikipedia.org/wiki/Minkowski_distance)
* minkowskiDistanceN(point1, point2, p) : Minkowski distance for N dimension(s)

#### Trigonometry

* sinc(value)
* sec(value)
* csc(value)
* cot(value)
* asec(value)
* acsc(value)
* acot(value)
* sech(value)
* csch(value)
* coth(value)
* asech(value)
* acsch(value)
* acoth(value)

#### Conversion

* toDegrees(radians)
* toRadians(degrees)

#### Mean

* rms(arrayOfValues) : [Root mean square](http://en.wikipedia.org/wiki/Root_mean_square)
* amean(arrayOfValues) : [Arithmetic mean](http://en.wikipedia.org/wiki/Arithmetic_mean)
* gmean(arrayOfValues) : [Geometric mean](http://en.wikipedia.org/wiki/Geometric_mean)
* hmean(arrayOfValues) : [Harmonic mean](http://en.wikipedia.org/wiki/Harmonic_mean)
* median(arrayOfValues)

#### Checks

* isNaN(value)
* isZero(value)
* isNegativeZero(value)
* isPositiveZero(value)
* isFinite(value)
* isInfinity(value)
* isNegativeInfinity(value)
* isPositiveInfinity(value)

#### Extras

* wshaper(value, min, max, shape)

```js
var Math = require('mathp');
var taxiDist = Math.manhattanDistance(0, 0, 12, 15);
var cos120degree = Math.cos(Math.toRadians(120));
```

## Potential use cases

* Generative art.
* Procedural heightmap / world generation.
* Anything that may benefit from some _maths_, and a lot of things do.

## Changelog

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

[Full history](https://github.com/kchapelier/node-mathp/blob/master/CHANGELOG.md)

## Roadmap

* Write better doc.

## Acknowledgement

Most ES6 polyfills are taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
where they were contributed by Mozilla Contributors under the Creative Commons CC-0 license (public domain).
Minor improvements of said polyfills were contributed back to MDN.

## License

MIT
