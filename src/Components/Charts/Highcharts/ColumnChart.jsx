import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { ColumnChartOption } from '../defaultChartValue';

/**
 * Component Column Charts
 **/
export default class ColumnChart extends Component {
	render() {
		const {
			config = {}, //default value of chart
			themes = null, //object themes chart
			modules = [], //array objects modules extend for chart
			title = null,
			subtitle = null,
			events = {},
			labelName = '',
			dataLabels = true,
			tooltip = {},
			stacking = null,
			grouping = true,
			legend = {},
			xAxis = {},
			yAxis = {},
			series = [],
			type = null,
			container = "column-chart",
		} = this.props;
		const options = ColumnChartOption(config, title, subtitle, events, labelName, dataLabels, tooltip, legend, stacking, grouping, xAxis, yAxis, series);

		return React.createElement(ChartBasic, {container:container, type:type, options:options, modules: modules, themes: themes});	
	}
}

