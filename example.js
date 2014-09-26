var monitor = require('./main');

monitor.trades.on('trade', function(trade) {
  console.log('trade:', trade);
});

monitor.summary.on('update', function(data) {
  console.log('summary:', data);
});

monitor.priceDistribution.on('update', function(data) {
  console.log('priceDistribution:', data);
});

monitor.priceCharts.oneMinute.on('update', function(data) {
  console.log('oneMinute:', data);
});

monitor.priceCharts.fiveMinutes.on('update', function(data) {
  console.log('fiveMinutes:', data);
});

monitor.priceCharts.fifteenMinutes.on('update', function(data) {
  console.log('fifteenMinutes:', data);
});

monitor.priceCharts.oneHour.on('update', function(data) {
  console.log('oneHour:', data);
});

monitor.standardDeviation.on('update', function(data) {
  console.log('standardDeviation:', data);
});

monitor.coefficientOfVariation.on('update', function(data) {
  console.log('coefficientOfVariation:', data);
});

monitor.range.on('update', function(data) {
  console.log('range:', data);
});

monitor.volume.on('update', function(data) {
  console.log('volume:', data);
});
