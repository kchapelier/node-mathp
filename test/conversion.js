"use strict";

require('chai')
    .use(require('./plugin/chai-math'))
    .should();

var Mathp = require('../index.js');

describe('Conversion', function(){
    describe('#toRadians()', function() {
        it('should make the correct conversion', function() {
            Mathp.toRadians(0).should.equal(0);
            Mathp.toRadians(10).should.equalFloat(0.17453292519943295);
            Mathp.toRadians(-10).should.equalFloat(-0.17453292519943295);
        });
    });

    describe('#toDegrees()', function() {
        it('should make the correct conversion', function() {
            Mathp.toDegrees(0).should.equal(0);
            Mathp.toDegrees(10).should.equalFloat(572.9577951308232);
            Mathp.toDegrees(-10).should.equalFloat(-572.9577951308232);
        });
    });
});
