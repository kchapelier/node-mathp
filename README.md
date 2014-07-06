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

## (Planned) features

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
* [cosh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh)
* [sign(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
* [sinh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh)
* [tanh(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)
* [trunc(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

### Additionnal

* wshaper(value, min, max, shape)
* lerp(value1, value2, ratio)
* limit(value, min, max)
* rms(arrayOfValues)
* amean(arrayOfValues)
* gmean(arrayOfValues)
* hmean(arrayOfValues)
* euclideanDistance(x1, y1, x2, y2)
* manhattanDistance(x1, y1, x2, y2)
* chebyshevDistance(x1, y1, x2, y2)
* minkowskiDistance(x1, y1, x2, y2, p)
* toDegrees(radians)
* toRadians(degrees)


```js
var Math = require('mathp');
var taxiDist = Math.manhattanDistance(0, 0, 12, 15);
var cos120degree = Math.cos(Math.toRadians(120));
```

## Potential use cases

* Generative art.
* Anything that may benefit from some _maths_, and a lot of things do.

## Changelog

## License

MIT