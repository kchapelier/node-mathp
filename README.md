Mathp
=====

[![Build Status](https://travis-ci.org/kchapelier/node-mathp.svg)](https://travis-ci.org/kchapelier/node-mathp) [![NPM version](https://badge.fury.io/js/mathp.svg)](http://badge.fury.io/js/mathp)

Math utility for node

## Installing and testing

With [npm](http://npmjs.org) do:

```
npm install mathp
```

To run the test suite, clone the repository and run the following command from the root directory:

```
npm test
```

## Features

* Can be used as a drop-in replacement for the Math object.
* Provide implementations of missing ES6 methods.
* Doesn't modify the actual Math object.
* Doesn't modify the Number prototype or rely on boxing of any kind.
* Works in Titanium.
* Supports deep requires for low footprint in browserify projects.

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
* step(edge, value)
* smoothstep(min, max, value)
* smootherstep(min, max, value)
* roundToPrecision(number, precision)
* euclideanModulo(dividend, divisor)
* flooredModulo(dividend, divisor)
* truncatedModulo(dividend, divisor)
* fract(value)

#### Distance

* euclideanDistance(x1, y1, x2, y2) : [Euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance)
* euclideanDistance3(x1, y1, z1, x2, y2, z2) : Euclidean distance for 3 dimensions
* euclideanDistanceN(point1, point2) : Euclidean distance for N dimension(s)
* manhattanDistance(x1, y1, x2, y2) : [Manhattan distance](http://en.wikipedia.org/wiki/Manhattan_distance)
* manhattanDistance3(x1, y1, z1, x2, y2, z2) : Manhattan distance for 3 dimensions
* manhattanDistanceN(point1, point2) : Manhattan distance for N dimension(s)
* chebyshevDistance(x1, y1, x2, y2) : [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance)
* chebyshevDistance3(x1, y1, z1, x2, y2, z2) : Chebyshev distance for 3 dimensions
* chebyshevDistanceN(point1, point2) : Chebyshev distance for N dimension(s)
* minkowskiDistance(x1, y1, x2, y2, p) : [Minkowski distance](http://en.wikipedia.org/wiki/Minkowski_distance)
* minkowskiDistance3(x1, y1, z1, x2, y2, z2) : Minkowski distance for 3 dimensions
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
* isInteger(value)
* isSafeInteger(value)

#### Extras

* wshaper(value, min, max, shape)


## Examples

### Basic usage

```js
var mathp = require('mathp');

var taxiDist = mathp.manhattanDistance(0, 0, 12, 15);
var cos120degree = Math.cos(mathp.toRadians(120));
```

### Replacing the native Math object

```js
var Math = require('mathp');

var taxiDist = Math.manhattanDistance(0, 0, 12, 15);
var cos120degree = Math.cos(Math.toRadians(120));
```

### With deep requires

```js
var manhattanDistance = require('mathp/functions/manhattanDistance')),
    toRandians = require('mathp/functions/toRadians'));

var taxiDist = manhattanDistance(0, 0, 12, 15);
var cos120degree = Math.cos(toRadians(120));
```

Projects using deep requires will only include the code they actually need whe bundled with browserify instead of the whole module.

## Potential use cases

* Generative art.
* Procedural heightmap / world generation.
* Anything that may benefit from some _maths_, and a lot of things do.

## Changelog

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
 * Removed the builds and other unecessary files from the package downloaded from npm.
 * Updated dev dependencies.
 * Added automatic tests on Node.js 0.12.x and io.js via Travis.
 * Removed automatic tests on Node.js 0.11.x via Travis.

### 1.3.0 (2015.02.03) :

 * New implementations : isInteger, isSafeInteger.

[Full history](https://github.com/kchapelier/node-mathp/blob/master/CHANGELOG.md)

## Roadmap

* Write better doc.

## Acknowledgement

Most ES6 polyfills are taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
where they were contributed by Mozilla Contributors under the Creative Commons CC-0 license (public domain).
Minor improvements of said polyfills were contributed back to MDN.

## License

MIT
