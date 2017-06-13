import React, {	Component } from 'react';
import ChartBasic from './ChartBasic';
import { PieChartOption } from '../defaultChartValue';

/**
 * Component Pie Charts
 **/
export default class PieChart extends Component {
	render() {
		const {
			config = {}, //default value of chart
			themes = null, //object themes chart
			modules = [], //array objects modules extend for chart
			title = null, //string
			subtitle = null, //number
			events = {}, //event click on chart
			labelName = null, //string
			legend = {}, //object matching with highchart
			series = [], //array matching with highchart
			type = null, //type of library highchart
			container = "pie-chart", //id element render
		} = this.props;
		const options = PieChartOption(config, title, subtitle, events, labelName, legend, series);

		return React.createElement(ChartBasic, {container:container, type:type, options:options, modules: modules, themes: themes});	
	}
}

