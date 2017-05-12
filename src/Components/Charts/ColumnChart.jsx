import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { ColumnChartOption } from './defaultChartValue';

/**
 * Component Column Charts
 **/
export default class ColumnChart extends Component {
	render() {
		const {
			config,
			title = null,
			subtitle = null,
			categories = [],
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
		const options = ColumnChartOption(config, title, subtitle, categories, events, labelName, dataLabels, tooltip, legend, stacking, grouping, xAxis, yAxis, series);

		return React.createElement(ChartBasic, {container:container, type:type, options:options});	
	}
}

