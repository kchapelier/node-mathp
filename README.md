Mathp
=====

[![Build Status](https://travis-ci.org/kchapelier/node-mathp.svg)](https://travis-ci.org/kchapelier/node-mathp)

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

* Can be use as a drop-in replacement for the Math object.
* Provide implementations of missing ES6 methods (i.e. for non-harmony node environment).
* Doesn't modify the actual Math object.
* Doesn't modify the Number prototype or rely on boxing of any kind.

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

#### Distance

* euclideanDistance(x1, y1, x2, y2)
* manhattanDistance(x1, y1, x2, y2)
* chebyshevDistance(x1, y1, x2, y2)
* minkowskiDistance(x1, y1, x2, y2, p)

#### Conversion

* toDegrees(radians)
* toRadians(degrees)

#### Mean

* rms(arrayOfValues)
* amean(arrayOfValues)
* gmean(arrayOfValues)
* hmean(arrayOfValues)

#### Checks

* isNaN(value)
* isZero(value)
* isNegativeZero(value)
* isPositiveZero(value)
* isInfinity(value)
* isNegativeInfinity(value)
* isPositiveInfinity(value)

#### Shaper

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

## Roadmap

* Tests for additional methods
* Fix the tests for -O
* Froze the API and increment version to 1.0.0

## Acknowledgement

Most ES6 polyfills are taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
where they were contributed by Mozilla Contributors under the Creative Commons CC-0 license (public domain).
Minor improvements of said polyfills were contributed back to MDN.

## License

MIT