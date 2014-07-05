var Benchmark = require('benchmark');
var Mathp = require('../index.js');

Benchmark.options.maxTime = 2;

var suite = new Benchmark.Suite();

suite.add('#Mathp.euclideanDistance()', function() {
	Mathp.euclideanDistance(40, 20, 30, 40);
}).add('#Mathp.Distance.EuclideanDistance()', function() {
	Mathp.Distance.euclideanDistance(40, 20, 30, 40);
}).on('cycle', function(event) {
	console.log(event.target.name, '|', (event.target.stats.mean * 1000) + 'ms', '|', event.target.stats.variance);
});

suite.run();