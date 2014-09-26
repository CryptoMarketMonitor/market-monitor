Crypto Market Monitor
==============

The goal of the Crypto Market Monitor Project is to make market data more accessible.
One challenge to anyone wishing to do anything with bitcoin market data
 (and any other cryptocurrency data), 
is the variety of markets. Each has their own api and data format. The Market Monitor project
makes it easy to get data from many exchanges from one source in a 
standardized format. We are planning on adding support for additional exchanges, 
and additional currency pairs in the near future.

For example usage, see [btc.marketmonitor.io] (http://btc.marketmonitor.io)

If there is any data you'd like to see added or any comments or critiques of our current
data streams, please open an issue. We are always looking for feedback and any improvements
we can make.

Disclaimer: This software and its associated data is provided as is, 
with no guarantee of validity or accuracy.

market-monitor
=============

An npm module for accessing the data of the Crypto Market Monitor Project.

Usage:

npm install market-monitor

var monitor = require('market-monitor');

Trades
=========
Emits a trade event whenever a trade occurs and passes the associated trade data.

Event: 'trade'

    monitor.trades.on('trade', function(trade) {
      console.log(trade);
    });

Data Format:

    {
      exchange: String,
      date: Date,
      price: Number,
      amount: Number,
      currency: 'BTC',
      tCurrency: 'USD',
      exchangeTradeID: String
    }

-----------

Market Summary Statistics
===============
Emits an object containing market summary statistics.

Event: 'update'

    monitor.summary.on('update', function(data) {
      console.log(data);
    });

Data Format:

    {
      vwap: Number,
      volume: Number,
      high: Number,
      low: Number,
      variance: Number,
      standardDeviation: Number,
      coefficientOfVariation: Number,
      range: Number,
      numTrades: Number
    }

----------

Price Over Time Chart Data
==================
Emits an array of datapoints useful for making price over time charts.

Event: 'update'
  
    monitor.priceCharts.oneMinute.on('update', function(data) {
      console.log(data);
    });


Timeframes:

oneMinute<br />
fiveMinutes<br />
fifteenMinutes<br />
oneHour<br />

Data Format:

    [
      {
        date; Date,
        high: Number,
        low: Number,
        open: Number,
        close: Number,
        vwap: Number,
        volume: Number,
        numTrades: Number
      }
      ...
    ]


----------

Price Distribution Chart Data
=================
Emits an array of datapoints useful for making price distribution charts

Event: 'update'

Data Format:

    [
      {
        exchange: String,
        price: Number,
        volume: Number
      },
      ...
    ]


Endpoints in progress:
==========

<p>These endpoints are intended to give details or particular statistics including 
highs, lows, averages, and percentiles. Current values are recalculated every 30
seconds and daily values are used for highs, lows, and averages.</p>
**monitor.standardDeviation**<br />
**monitor.coefficientOfVariation**<br />
**monitor.range**<br />
**monitor.volume**<br />









