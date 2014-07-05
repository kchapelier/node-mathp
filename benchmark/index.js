var Benchmark = require('benchmark');
var Mathp = require('../index.js');

Benchmark.options.maxTime = 1.5;

var suite = new Benchmark.Suite();

suite.add('#Math.cos()', function() {
	Math.cos(40);
}).add('#Math.sin()', function() {
	Math.sin(40);
}).on('cycle', function(event) {
	console.log(event.target.name, '|', (event.target.stats.mean * 1000) + 'ms', '|', event.target.stats.variance);
});

suite.run();