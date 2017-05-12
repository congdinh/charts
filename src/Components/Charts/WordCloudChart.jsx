import React, {	Component } from 'react';
import ChartEcharts from './ChartEcharts';
import { WordCloudChartOption } from './defaultChartValue';

/**
 * Component WordCloud Charts
 **/
export default class WordCloudChart extends Component {
	render() {
		const {
			config,
			title = {},
			tooltip = {},
			toolbox = {},
			series = [],
			container = "wordcloud-chart",
		} = this.props;
		 const options = WordCloudChartOption(config, title, tooltip, toolbox, series);

		return React.createElement(ChartEcharts, {container:container, options:options});	
	}
}

