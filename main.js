var io = require('socket.io-client');

var priceCharts = {};
priceCharts.oneMinute = io('http://api.marketmonitor.io:80/BTC/USD/priceCharts/oneMinute');
priceCharts.fiveMinutes = io('http://api.marketmonitor.io:80/BTC/USD/priceCharts/fiveMinutes');
priceCharts.fifteenMinutes = io('http://api.marketmonitor.io:80/BTC/USD/priceCharts/fifteenMinutes');
priceCharts.oneHour = io('http://api.marketmonitor.io:80/BTC/USD/priceCharts/oneHour');

var monitor = {};
monitor.btc = {};
monitor.btc.usd = {
  trades: io('http://api.marketmonitor.io:80/BTC/USD/trades'),
  summary: io('http://api.marketmonitor.io:80/BTC/USD/summary'),
  standardDeviation: io('http://api.marketmonitor.io:80/BTC/USD/standardDeviation'),
  coefficientOfVariation: io('http://api.marketmonitor.io:80/BTC/USD/coefficientOfVariation'),
  range: io('http://api.marketmonitor.io:80/BTC/USD/range'),
  volume: io('http://api.marketmonitor.io:80/BTC/USD/volume'),
  priceDistribution: io('http://api.marketmonitor.io:80/BTC/USD/priceDistribution'),
  priceCharts: priceCharts
  
}
module.exports = monitor;
