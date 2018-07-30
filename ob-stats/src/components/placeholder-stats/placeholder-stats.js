/*
  A basic React Component rendering a placeholder stats chart. Used for layout/prototyping.
*/
import React, { Component } from 'react';
import './placeholder-stats.css';

import ChartistGraph from 'react-chartist';

var lineChartData = {
  labels: ['sfw', 'nsfw'],
  series: [[13354, 274]]
};
var lineChartOptions = {
  low: 0,
  showArea: true
};

var data = {
  labels: ['sfw', 'nsfw'],
  series: [13354, 274]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value;
  }
};

var responsiveOptions = [
  // ['screen and (min-width: 640px)', {
  //   chartPadding: 300,
  //   labelOffset: 300,
  //   labelDirection: 'explode',
  //   labelInterpolationFnc: function(value) {
  //     return value;
  //   }
  // }],
  [
    'screen and (min-width: 0px)',
    {
      labelOffset: 40,
      chartPadding: 15
    }
  ]
];

// new Chartist.Pie('.ct-chart', data, options, responsiveOptions);

export default class PlaceholderStats extends Component {
  render() {
    return (
      <div className="stats-container">
        <ChartistGraph
          data={data}
          options={options}
          type={'Pie'}
          responsiveOptions={responsiveOptions}
        />
      </div>
      // <div className="pie-container">
      //   <ChartistGraph data={data} options={options} type={'Pie'} responsiveOptions={responsiveOptions}/>
      // </div>
    );
  }
}
