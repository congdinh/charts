import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { LineChartOption } from '../defaultChartValue';
import { indexOf } from 'underscore';

/**
 * Component Line Charts
 **/
export default class LineChart extends Component {

	_setDataLabel(value, color) {
		let datalable = {
			dataLabels: {
				enabled: true,
				align: 'center',
				shape: 'callout',
				borderRadius: 3,
				backgroundColor: color,
				style: {
					color: '#FFFFFF',
					textShadow: 'none'
				},
				x: 0,
				y: -23,
				verticalAlign: 'middle',
				overflow: true,
				crop: false
			},
			y: value
		};
		return datalable;
	}

	_minMaxDataLabel(data, color = null) {
		let maxValue = Math.max.apply(this, data);
		let minValue = Math.min.apply(this, data);
		let maxIndex = indexOf(data, maxValue);
		let minIndex = indexOf(data, minValue);
		let minDataLabel = this._setDataLabel(minValue, color);
		let maxDataLabel = this._setDataLabel(maxValue, color);
		data[minIndex] = minDataLabel;
		data[maxIndex] = maxDataLabel;
		return data;
	}

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
			minMaxDataLabels = false,
			marker = {},
			tooltip = {},
			stacking = null,
			legend = {},
			xAxis = {},
			yAxis = {},
			series = [],
			type = null,
			container = "line-chart",
		} = this.props;
		if(minMaxDataLabels && Object.keys(series).length > 0) {
			series.forEach((item, key) => {
				series[key].data = this._minMaxDataLabel(item.data, item.color);
			});
		}
		const options = LineChartOption(config, title, subtitle, events, labelName, dataLabels, marker, tooltip, legend, stacking, xAxis, yAxis, series);

		return React.createElement(ChartBasic, {container:container, type:type, options:options, modules: modules, themes: themes});	
	}
}

