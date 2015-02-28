"use strict";

require('chai')
    .use(require('./plugin/chai-math'))
    .should();

var Mathp = require('../index.js');

describe('Properties', function(){
    it('should be read-only', function() {
        (function() { Mathp.E = 1; }).should.throw();

        Mathp.E.should.equal(Math.E);
        Mathp.E.should.not.equal(1);
    });
});
