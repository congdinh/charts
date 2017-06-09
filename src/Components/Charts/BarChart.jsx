import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { BarChartOption } from './defaultChartValue';

/**
 * Component Bar Charts
 **/
export default class BarChart extends Component {
	render() {
		const {
			config, //default value of chart
			themes = null, //object themes chart
			modules = [], //array objects modules extend for chart
			title = null,
			subtitle = null,
			categories = [],
			events = {},
			labelName = '',
			dataLabels = true,
			tooltip = {},
			stacking = null,
			legend = {},
			xAxis = {},
			yAxis = {},
			series = [],
			type = null,
			container = "bar-chart",
		} = this.props;
		const options = BarChartOption(config, title, subtitle, categories, events, labelName, dataLabels, tooltip, legend, stacking, xAxis, yAxis, series);

		return React.createElement(ChartBasic, {container:container, type:type, options:options, modules: modules, themes: themes});	
	}
}

