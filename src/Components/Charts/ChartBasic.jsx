import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';

// Alternatively, this is how to load Highcharts, Highstock or Highmaps
// var Highcharts = require('highcharts');
// var Highcharts = require('highcharts/highmaps');

/**
 * Component Chart Basic
 *  Description
 *    container: string ( a element ID)
 *    modules: array ( library of highchart)
 *    options: object ( config highchart)
 *
 **/
export default class ChartBasic extends Component {
  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach((module) => {
        module(Highcharts);
      });
    }
    // Set container which the chart should render to.
    this.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.props.options
    );
  }

  //Destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy();
  }

  //Create the div which the chart will be rendered to.
  render() {
    return React.createElement('div', {
      id: this.props.container
    });
  }
}