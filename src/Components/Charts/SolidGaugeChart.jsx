import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { SolidGaugeChartOption } from './defaultChartValue';
import Highcharts from 'highcharts/highstock';
import SolidGauge from 'highcharts/modules/solid-gauge';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

/**
 * Component Solid Gauge Charts
 **/
export default class SolidGaugeChart extends Component {
	render() {
		const {
			config, //default value of chart
			themes = null, //object themes chart
			modules = [], //array objects modules extend for chart
			title = null,
			subtitle = null,
			total = 0,
			events = {},
			labelName = '',
			legend = {},
			yAxis = {},
			series = [],
			type = null,
			container = "solidgauge-chart"
		} = this.props;
		const gaugeOptions = SolidGaugeChartOption(config, title, subtitle, total, events, labelName, legend);
		let options = Highcharts.merge(gaugeOptions, {
			yAxis: yAxis,
			series: series
		});
		modules.push(SolidGauge); //library for chart solidgauge

		return React.createElement(ChartBasic, {container:container, type:type, options:options, modules: modules, themes: themes});	
	}
}