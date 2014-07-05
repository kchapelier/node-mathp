Mathp
=====

[![Build Status](https://travis-ci.org/kchapelier/node-mathp.svg)](https://travis-ci.org/kchapelier/node-mathp)

Math utility for node

## (Planned) features

* Can be use as a drop-in replacement for the Math object.
* Provide implementations of missing ES6 methods (i.e. for non-harmony node environment).
* Doesn't modify the actual Math object.
* Doesn't modify the Number prototype or rely on boxing of any kind.

## Current methods

### Polyfills

* Currently, none.

### Additionnal

* lerp(value1, value2, ratio)
* sign(value)
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
```