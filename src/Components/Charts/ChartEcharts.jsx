import React, { Component } from 'react';
import Echarts from 'echarts';

/**
 * Component Echart
 *  Description
 *    container: string ( a element ID)
 *    modules: array ( library of Echart)
 *    options: object ( config Echart)
 *
 **/
export default class ChartEcharts extends Component {
  componentDidMount() {
    // Extend ChartEcharts with modules
    // if (this.props.modules) {
    //   this.props.modules.forEach((module) => {
    //     module(Echarts);
    //   });
    // }
    // Set container which the chart should render to.
    // this.chart = new Echart(
    //   this.props.container,
    //   this.props.options
    // );
    require('echarts-wordcloud');
    this.chart = Echarts.init(document.getElementById(this.props.container));
    this.chart.setOption(this.props.options);
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