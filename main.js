var io = require('socket.io');

var trades = io('http://broadcastserver.azurewebsites.net/BTC/USD/trades');
var summary = io('http://broadcastserver.azurewebsites.net/BTC/USD/summary');
var volatility = io('http://broadcastserver.azurewebsites.net/BTC/USD/volatility');
var range = io('http://broadcastserver.azurewebsites.net/BTC/USD/range');
var volume = io('http://broadcastserver.azurewebsites.net/BTC/USD/volume');
var priceDistribution = io('http://broadcastserver.azurewebsites.net/BTC/USD/priceDistribution');

module.exports = {
  trades = trades,
  summary = summary,
  volatility = volatility,
  range = range,
  volume = volume,
  priceDistribution = priceDistribution
};