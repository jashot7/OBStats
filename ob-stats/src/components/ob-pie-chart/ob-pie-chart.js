import React, { Component } from 'react';
import './ob-pie-chart.css';
import { PropTypes } from 'prop-types';
import ChartistGraph from 'react-chartist';

export default class ObPieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        // labelDirection: 'implode',
        // labelDirection: 'implode'
        ignoreEmptyValues: true,
        labelOffset: -10
      },
      responsiveOptions: [
        [
          'screen and (min-width: 0px)',
          {
            // labelOffset: 10,
            // chartPadding: 50
            // labelPosition: 'center'
          }
        ]
      ]
    };
  }

  render() {
    if (!this.props.data) {
      return <div className="ob-pie-chart">loading...</div>;
    }
    return (
      <div className="ob-pie-chart flex column justify-space-between align-stretch neonbox1-sm">
        <h3 className="fnt-center fnt-larger fnt-accent2">
          {this.props.title}
        </h3>
        {/* <div>{JSON.stringify(this.props)}</div> */}
        <ChartistGraph
          className="ob-chartist-pie fnt-accent2"
          data={this.props.data}
          options={this.state.options}
          type={'Pie'}
          responsiveOptions={this.state.responsiveOptions}
        />
      </div>
    );
  }
}
ObPieChart.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string.isRequired
};
