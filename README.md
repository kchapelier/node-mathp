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
Edition of the ECMAScript Language to ensure optimal conformity.

### Additional methods

#### General

* sign1(value)
* copySign(value, sign)
* lerp(value1, value2, ratio)
* limit(value, min, max)
* scale(value, origMin, origMax, destMin, destMax)
* factorial(value)
* smoothstep(min, max, value)
* smootherstep(min, max, value)

#### Distance

* euclideanDistance(x1, y1, x2, y2)
* manhattanDistance(x1, y1, x2, y2)
* chebyshevDistance(x1, y1, x2, y2)
* minkowskiDistance(x1, y1, x2, y2, p)

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

## Roadmap

* Freeze the API and increment version to 1.0.0

## Acknowledgement

Most ES6 polyfills are taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
where they were contributed by Mozilla Contributors under the Creative Commons CC-0 license (public domain).
Minor improvements of said polyfills were contributed back to MDN.

## License

MIT