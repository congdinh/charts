import React, { Component } from 'react';
import Echarts from 'echarts';
import 'echarts/theme/dark';

/**
 * Component Echart
 *  Description
 *    container: string ( a element ID)
 *    modules: array ( library of Echart)
 *    options: object ( config Echart)
 *
 **/
export default class ChartEcharts extends Component {

  _initChart(props) {
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

    document.getElementById(props.container).style.width = props.width;
    document.getElementById(props.container).style.height = props.height;

    require('echarts-wordcloud');
    this.chart = Echarts.init(document.getElementById(props.container), props.themes);
    this.chart.setOption(props.options);
  }

  componentWillReceiveProps(nextProps) {
    this._initChart(nextProps);
  }

  componentDidMount() {
    this._initChart(this.props);
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