import React, {	Component } from 'react';
import ChartEcharts from './ChartEcharts';
import { WordCloudChartOption } from './defaultChartValue';

/**
 * Component WordCloud Charts
 **/
export default class WordCloudChart extends Component {
	constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '400px'
    }
  }

  onResize() {
    this.setState({width: window.innerWidth, height:window.innerHeight});
  }

  setSize(props) {
  	let {width = '100%', height = '400px'} = props;
  	this.setState({width: width, height: height});
  }

  componentWillReceiveProps(nextProps) {
  	this.setSize(nextProps);
    window.addEventListener("resize", this.onResize.bind(this));
  }

  componentDidMount() {
  	this.setSize(this.props);
    window.addEventListener("resize", this.onResize.bind(this));
  }

  //Destroy chart before unmount.
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

	render() {
		const {
			config,
      themes = null,
			title = {},
			tooltip = {},
			toolbox = {},
			series = [],
			container = "wordcloud-chart",
		} = this.props;
	 	const options = WordCloudChartOption(config, title, tooltip, toolbox, series);

		return React.createElement(ChartEcharts, {container, options, themes, ...this.state});	
	}
}