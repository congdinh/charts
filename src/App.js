import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import { PieChart, ColumnChart, LineChart, SplineChart, BarChart, AreaChart, AreaSplineChart, SolidGaugeChart, WordCloudChart } from "./Components/Charts/index";
import { sentiments, channels, config } from "./Components/Charts/defaultValue";

/* Library Themes, Extend modules for highcharts */
import Exporting from 'highcharts/modules/exporting';
import DarkUnica from 'highcharts/themes/dark-unica';
import DarkBlue from 'highcharts/themes/dark-blue';
import DarkGreen from 'highcharts/themes/dark-green';


/**
 * App component
 * */
export default class App extends Component {
  render() {
    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div className="charts">
          <h4 className="red">Chart Overall Sentiment</h4>
          <PieChart {...this.props.sentimentsPieChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Brand Attributes</h4>
          <PieChart {...this.props.brandAttributesPieChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Buzz Distribution</h4>
          <PieChart {...this.props.buzzDistributionPieChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Sentiment By Channel</h4>
          <ColumnChart {...this.props.sentimentByChannelColumnChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Percent Sentiment By Channel</h4>
          <ColumnChart {...this.props.percentSentimentByChannelColumnChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Negative Buzz</h4>
          <ColumnChart {...this.props.negativeBuzzColumnChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Buzz Distribution Channel</h4>
          <ColumnChart {...this.props.buzzDistributionChannelColumnChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Positive Vs Negative</h4>
          <ColumnChart {...this.props.positiveVsNegativeColumnChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Buzz Volumn Comparison</h4>
          <ColumnChart {...this.props.buzzVolumnComparisonColumnChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Sentiment Trendline</h4>
          <LineChart {...this.props.sentimentTrendlineLineChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Buzz Trendline</h4>
          <SplineChart {...this.props.buzzTrendlineSplineChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Sentiment Trendline</h4>
          <SplineChart {...this.props.sentimentTrendlineSplineChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Sentiment Min Max</h4>
          <SplineChart {...this.props.sentimentMinMaxSplineChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Sentiment By Brand Attribute</h4>
          <BarChart {...this.props.sentimentByBrandAttributeBarChart} />
        </div>
        <div className="charts">
          <h4 className="red">Chart Channel By Brand Attribute</h4>
          <BarChart {...this.props.channelByBrandAttributeBarChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Buzz Trendline Min Max</h4>
          <AreaChart {...this.props.buzzTrendlineMinMaxAreaChart} />
        </div>
        <hr />

        <div className="charts">
          <h4 className="red">Chart Buzz Trendline</h4>
          <AreaSplineChart {...this.props.buzzTrendlineAreaSplineChart} />
        </div>

        <hr />
        <div className="charts">
          <h4 className="red">Source Of Conversations</h4>
          <SolidGaugeChart {...this.props.sourceOfConversationsSolidGaugeChart} />
        </div>

        <hr />
        <div className="charts">
          <h4 className="red">Popular Subject</h4>
          <WordCloudChart {...this.props.wordCloudChart} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  sentimentsPieChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Total <br/> Sentiment<br>",
    subtitle: 3001,
    container: "sentiments-piechart",
    labelName: "Buzzes",
    series: [{
      name: "Chart Overall Sentiment",
      maxPointWidth: 40,
      innerSize: "65%",
      dataLabels: {
        enabled: true
      },
      data: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        y: 18
      }, {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        y: 54
      }, {
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        y: 40
      }]
    }]
  },
  brandAttributesPieChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "brand-attributes-piechart",
    labelName: "Buzzes",
    series: [{
      name: "Chart Brand Attributes",
      dataLabels: {
        enabled: true
      },
      data: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        y: 18
      }, {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        y: 54
      }, {
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        y: 40
      }]
    }]
  },
  buzzDistributionPieChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Buzz<br/>Distribution<br>",
    subtitle: 3001,
    container: "buzz-distribution-piechart",
    labelName: "Buzzes",
    series: [{
      name: "Chart Buzz Distribution",
      maxPointWidth: 40,
      innerSize: "65%",
      dataLabels: {
        enabled: true
      },
      data: [{
        name: channels.fbPage.value,
        color: channels.fbPage.color,
        y: 180
      },
      {
        name: channels.fbUser.value,
        color: channels.fbUser.color,
        y: 100
      },
      {
        name: channels.forum.value,
        color: channels.forum.color,
        y: 77
      },
      {
        name: channels.news.value,
        color: channels.news.color,
        y: 99
      },
      {
        name: channels.blog.value,
        color: channels.blog.color,
        y: 190
      },
      {
        name: channels.youtube.value,
        color: channels.youtube.color,
        y: 28
      },
      {
        name: channels.qa.value,
        color: channels.qa.color,
        y: 18
      },
      {
        name: channels.sns.value,
        color: channels.sns.color,
        y: 18
      },
      {
        name: channels.linkedin.value,
        color: channels.linkedin.color,
        y: 18
      },
      {
        name: channels.ecommerce.value,
        color: channels.ecommerce.color,
        y: 18
      }]
    }]
  },
  sentimentByChannelColumnChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "sentiment-by-channel-column-chart",
    title: "Sentiment By Channel",
    subtitle: "column",
    labelName: "",
    dataLabels: true, //show dataLabels
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "normal", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ['Facebook Pages', 'Facebook Users', 'Forum', 'News', 'Blog', 'Youtube', 'Q&A', 'Social Site', 'Linkedin Pages', 'Ecommerce Sites'],
      title: {
        text: 'Channel'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [5000, 300, 4000, 700, 20, 200, 2000, 300, 200, 100]
    }, {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [200, 2000, 300, 200, 100, 5000, 300, 4000, 700, 20]
    }, {
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [300, 4000, 4000, 200, 500, 5000, 300, 4000, 700, 20]
    }]
  },
  percentSentimentByChannelColumnChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "percent-sentiment-by-channel-column-chart",
    title: "Percent Sentiment By Channel",
    subtitle: "column",
    labelName: "buzzes",
    dataLabels: true, //show dataLabels
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "percent", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ['Facebook Pages', 'Facebook Users', 'Forum', 'News', 'Blog', 'Youtube', 'Q&A', 'Social Site', 'Linkedin Pages', 'Ecommerce Sites'],
      title: {
        text: 'Channel'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [5000, 300, 4000, 700, 20, 200, 2000, 300, 200, 100]
    }, {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [200, 2000, 300, 200, 100, 5000, 300, 4000, 700, 20]
    }, {
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [300, 4000, 4000, 200, 500, 5000, 300, 4000, 700, 20]
    }]
  },
  negativeBuzzColumnChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "negative-buzz-column-chart",
    title: "Negative Buzz",
    subtitle: "column",
    labelName: "buzzes",
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14","2017-04-15","2017-04-16","2017-04-17","2017-04-18","2017-04-19","2017-04-20","2017-04-21","2017-04-22","2017-04-23","2017-04-24"],
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [41,23,40,31,82,72,26,116,48,45,25,45,85,81,181,43,75,74,118,81,50,36,60,44,61,58,33,40,32,201]
    }]
  },
  buzzDistributionChannelColumnChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "buzz-distribution-channel-chart",
    title: "Buzz Distribution Channel",
    subtitle: "column",
    labelName: "buzzes",
    tooltip: {
      valueSuffix: ' buzzes',
      shared: false
    },
    xAxis: {
      categories: ['Facebook Pages', 'Facebook Users', 'Forum', 'News', 'Blog', 'Youtube', 'Q&A', 'Social Site', 'Linkedin Pages', 'Ecommerce Sites']
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
      name: 'Channels',
      data: [{
        color: channels.fbPage.color,
        y: 180
      }, {
        color: channels.fbUser.color,
        y: 100
      }, {
        color: channels.forum.color,
        y: 77
      }, {
        color: channels.news.color,
        y: 99
      }, {
        color: channels.blog.color,
        y: 190
      }, {
        color: channels.youtube.color,
        y: 28
      }, {
        color: channels.qa.color,
        y: 18
      }, {
        color: channels.sns.color,
        y: 18
      }, {
        color: channels.linkedin.color,
        y: 18
      }, {
        color: channels.ecommerce.color,
        y: 18
      }]
    }]
  },
  positiveVsNegativeColumnChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "positive-vs-negative-column-chart",
    title: "Positive Vs Negative",
    subtitle: "column",
    labelName: "buzzes",
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2 days ago", "yesterday", "today"],
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [22,23,40]
    },
    {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [41,22,19]
    }]
  },
  buzzVolumnComparisonColumnChart: {
    config: {
      fontFamily: 'Lato, sans-serif',
      titleTextColor: '#1cc5c8',
      subtitleTextColor: '#1cc5c8',
      titleFontSize: '20px',
      subtitleFontSize: '35px',
      lineColor: '#297ab8',
      lineWidth: 1,
      borderRadius: 0,
    },
    themes: DarkUnica,
    modules: [Exporting],
    container: "buzz-volumn-comparison-column-chart",
    title: "Buzz Volumn Comparison",
    subtitle: "column",
    labelName: "",
    dataLabels: true, //show dataLabels
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "", // null or normal or percent
    grouping: false, // group column
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0,
      symbolRadius: 0, // square
    }, // legend of chart
    xAxis: {
      categories: ['Facebook Pages', 'Facebook Users', 'Forum', 'News', 'Blog', 'Youtube', 'Q&A', 'Social Site', 'Linkedin Pages', 'Ecommerce Sites'],
      title: {
        text: 'Channel'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: 'Previous',
        color: '#E6E6E6',
        data: [5000, 300, 4000, 700, 20, 200, 2000, 300, 200, 100],
        pointPadding: 0,
        maxPointWidth: 80
    }, {
        name: 'Current',
        color: '#54aeF1',
        data: [200, 2000, 300, 200, 100, 5000, 300, 4000, 700, 20],
        pointPadding: 0.2,
        maxPointWidth: 60
    }]
  },
  sentimentTrendlineLineChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Sentiment Trendline",
    subtitle: "line",
    container: "sentiment-trendline-linechart",
    labelName: "Buzzes",
    dataLabels: true, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"]
    },
    yAxis: {
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        dataLabels: {
          enabled: false
        },
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [41,23,40,31,82,72,26,116,48,45,25,45,85,81,181,43,75,74,118,81]
    },{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [82,110,37,233,335,145,337,135,61,181,204,315,240,143,280,176,391,203,100,176]
    },{
        dataLabels: {
          enabled: false
        },
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [390,233,322,17,167,342,205,234,212,382,321,252,71,26,380,328,318,351,302,261]
    }]
  },
  buzzTrendlineSplineChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Buzz Trendline",
    subtitle: "spline",
    container: "buzz-trendline-splinechart",
    labelName: "Buzzes",
    dataLabels: false, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    marker: {
      fillColor: '#FFFFFF',
      lineWidth: 2,
      lineColor: null
    },
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"]
    },
    yAxis: {
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        dataLabels: {
          enabled: false
        },
        name: "buzz",
        color: "#42c8c9",
        data: [41,23,40,31,82,72,26,116,48,45,25,45,85,81,181,43,75,74,118,81]
    }]
  },
  sentimentTrendlineSplineChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Sentiment Trendline",
    subtitle: "spline",
    container: "sentiment-trendline-splinechart",
    labelName: "Buzzes",
    dataLabels: true, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"]
    },
    yAxis: {
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        dataLabels: {
          enabled: false
        },
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [41,23,40,31,82,72,26,116,48,45,25,45,85,81,181,43,75,74,118,81]
    },{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [82,110,37,233,335,145,337,135,61,181,204,315,240,143,280,176,391,203,100,176]
    },{
        dataLabels: {
          enabled: false
        },
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [390,233,322,17,167,342,205,234,212,382,321,252,71,26,380,328,318,351,302,261]
    }]
  },
  sentimentMinMaxSplineChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    title: "Sentiment Min Max",
    subtitle: "spline",
    container: "sentiment-minmax-splinechart",
    labelName: "Buzzes",
    dataLabels: false, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"]
    },
    yAxis: {
      title: {
        text: 'Buzz'
      },
      allowDecimals: false
    },
    series: [{
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [41,23,40,31,82,72,26,116,48,45,25,45,85,81,181,43,75,74,118,81]
    },{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [82,110,37,233,335,145,337,135,61,181,204,315,240,143,280,176,391,203,100,176]
    },{
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [390,233,322,17,167,342,205,234,212,382,321,252,71,26,380,328,318,351,302,261]
    }]
  },
  sentimentByBrandAttributeBarChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "sentiment-by-brand-attribute-bar-chart",
    title: "Sentiment By Brand Attribute",
    subtitle: "bar",
    labelName: "",
    dataLabels: true, //show dataLabels
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "normal", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ['Facebook Pages', 'Facebook Users', 'Forum', 'News', 'Blog', 'Youtube', 'Q&A', 'Social Site', 'Linkedin Pages', 'Ecommerce Sites'],
      title: {
        text: 'Channel'
      },
      max: 3,
      labels: {
        style: {
          width: '100px',
          minWidth: '100px',
          maxWidth: '100px',
          overflow: 'hidden'
        },
        useHTML : true
      },
      scrollbar: {
        enabled: true,
        showFull: false,
        barBackgroundColor: '#c0c0c0',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: '#c0c0c0',
        buttonBorderWidth: 0,
        buttonBorderRadius: 7,
        trackBackgroundColor: 'none',
        trackBorderWidth: 1,
        trackBorderRadius: 8,
        trackBorderColor: '#CCC'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: sentiments.positive.value,
        color: sentiments.positive.color,
        data: [5000, 300, 4000, 700, 20, 200, 2000, 300, 200, 100]
    }, {
        name: sentiments.negative.value,
        color: sentiments.negative.color,
        data: [200, 2000, 300, 200, 100, 5000, 300, 4000, 700, 20]
    }, {
        name: sentiments.neutral.value,
        color: sentiments.neutral.color,
        data: [300, 4000, 4000, 200, 500, 5000, 300, 4000, 700, 20]
    }]
  },
  channelByBrandAttributeBarChart: {
    config: config,
    themes: DarkBlue,
    modules: [Exporting],
    container: "channel-by-brand-attribute-bar-chart",
    title: "Channel By Brand Attribute",
    subtitle: "bar",
    labelName: "",
    dataLabels: true, //show dataLabels
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'],
      title: {
        text: 'Channel'
      },
      max: 3,
      labels: {
        style: {
          width: '100px',
          minWidth: '100px',
          maxWidth: '100px',
          overflow: 'hidden'
        },
        useHTML : true
      },
      scrollbar: {
        enabled: true,
        showFull: false,
        barBackgroundColor: '#c0c0c0',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: '#c0c0c0',
        buttonBorderWidth: 0,
        buttonBorderRadius: 7,
        trackBackgroundColor: 'none',
        trackBorderWidth: 1,
        trackBorderRadius: 8,
        trackBorderColor: '#CCC'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: channels.fbPage.value,
        color: channels.fbPage.color,
        data: [87,45,69,40,77,93,13,39,25,74]
      },
      {
        name: channels.fbUser.value,
        color: channels.fbUser.color,
        data: [94,82,95,46,50, 2,15,90,14,34]
      },
      {
        name: channels.forum.value,
        color: channels.forum.color,
        data: [27,28,83, 5, 3,76,99, 7,43,80]
      },
      {
        name: channels.news.value,
        color: channels.news.color,
        data: [61,56,59,51,86,55, 8,70, 9,88]
      },
      {
        name: channels.blog.value,
        color: channels.blog.color,
        data: [1,78,11,60,96,18,89,30,79,92]
      },
      {
        name: channels.youtube.value,
        color: channels.youtube.color,
        data: [54,68,81,98,22, 6,53,19,31,32]
      },
      {
        name: channels.qa.value,
        color: channels.qa.color,
        data: [12,23,44,73,58,35, 4,24,42,97]
      },
      {
        name: channels.sns.value,
        color: channels.sns.color,
        data: [84,47,100,29,67,26,85,57,91,75]
      },
      {
        name: channels.linkedin.value,
        color: channels.linkedin.color,
        data: [10,66,38,52,62,48,41,49,63,72]
      },
      {
        name: channels.ecommerce.value,
        color: channels.ecommerce.color,
        data: [20,71,65,17,64,21,36,33,16,37]
      }]
  },
  buzzTrendlineMinMaxAreaChart: {
    config: config,
    themes: DarkGreen,
    modules: [Exporting],
    container: "buzz-trendline-minmax-area-chart",
    title: "Buzz Trendline MinMax",
    subtitle: "area",
    labelName: "",
    dataLabels: true, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    marker: {
      fillColor: '#FFFFFF',
      lineWidth: 2,
      lineColor: null
    },
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"],
      title: {
        text: 'Time'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: 'Previous',
        color: '#CCCCCC',
        data: [82,110,37,233,335,145,337,74,118,81]
    },{
        name: 'Current',
        color: '#42c8c9',
        data: [25,45,85,81,181,43,75,135,61,41,23,40,31,82,72,26,116,48,45]
    }]
  },
  buzzTrendlineAreaSplineChart: {
    config: config,
    themes: DarkUnica,
    modules: [Exporting],
    container: "buzz-trendline-area-spline-chart",
    title: "Buzz Trendline",
    subtitle: "areaspline",
    labelName: "",
    dataLabels: true, //show dataLabels
    minMaxDataLabels: true, // show min max dataLabels with this background
    marker: {
      fillColor: '#FFFFFF',
      lineWidth: 2,
      lineColor: null
    },
    tooltip: {
      valueSuffix: ' buzzes',
      shared: true
    },
    stacking: "", // null or normal or percent
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    }, // legend of chart
    xAxis: {
      categories: ["2017-03-26","2017-03-27","2017-03-28","2017-03-29","2017-03-30","2017-03-31","2017-04-01","2017-04-02","2017-04-03","2017-04-04","2017-04-05","2017-04-06","2017-04-07","2017-04-08","2017-04-09","2017-04-10","2017-04-11","2017-04-12","2017-04-13","2017-04-14"],
      title: {
        text: 'Time'
      }
    },
    yAxis: {
      min: 1,
      title: {
        text: 'Buzz'
      },
      type: '', //logarithmic
      allowDecimals: false,
      stackLabels: 'buzzes'
    },
    series: [{
        name: 'Previous',
        color: '#CCCCCC',
        data: [82,110,37,233,335,145,337,74,118,81]
    },{
        name: 'Current',
        color: '#42c8c9',
        data: [25,45,85,81,181,43,75,135,61,41,23,40,31,82,72,26,116,48,45]
    }]
  },
  sourceOfConversationsSolidGaugeChart: {
    config: config,
    modules: [Exporting],
    themes: DarkUnica,
    container: "source-of-conversations-solid-gauge-chart",
    title: "Source Of Conversations",
    subtitle: "solidgauge",
    total: 1450,
    labelName: "buzzes",
    legend: {
      reversed: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      borderWidth: 0
    }, // legend of chart
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      minorTickInterval: null,
      tickPixelInterval: 400,
      tickWidth: 0,
      labels: {
        y: 30,
        style: {
          'color': '#fff',
          'display': 'none'
        }
      }
    },
    series: [{
      name: 'Facebook',
      colors: ['#42c8c9'],
      data: [80]
    }]
  },
  wordCloudChart: {
    config: config,
    themes: 'dark', //only theme dark echart
    container: 'wordcloud-chart',
    width: '100%',
    height: '300px',
    title: {
      text: 'WordCloud Chart',
      link: 'http://www.google.com/trends/hottrends',
    },
    tooltip: {
       show: true
    },
    toolbox: {
      show: false,
      feature: {
        dataView: {
          show: true,
          readOnly: false,
          title: "Data",
          lang: ['Show Raw Data', 'Done', 'Cancel']
        },
        saveAsImage: {
          show: true,
          title: "Save"
        }
      }
    },
    series: [{
      name: 'Farrah Abraham',
      value: 2,
      // Style of single text
      textStyle: {
        normal: {},
        emphasis: {}
      }
    }, {
      name: "học phí",
      value: 8
    }, {
      name: "đại học",
      value: 7
    }, {
      name: "chương trình",
      value: 5
    }, {
      name: "chi tiết",
      value: 3
    }, {
      name: "nhập học",
      value: 3
    }, {
      name: "sự kiện",
      value: 3
    }, {
      name: "đăng ký",
      value: 3
    }, {
      name: "ưu đãi",
      value: 3
    }, {
      name: "bận rộn",
      value: 2
    }, {
      name: "bằng cấp",
      value: 2
    }, {
      name: "chủ nhật",
      value: 2
    }, {
      name: "chứng chỉ",
      value: 2
    }, {
      name: "công nghệ",
      value: 2
    }, {
      name: "cử nhân",
      value: 2
    }, {
      name: "du lịch",
      value: 2
    }, {
      name: "giới thiệu",
      value: 2
    }, {
      name: "hôm nay",
      value: 2
    }, {
      name: "hướng nghiệp",
      value: 2
    }, {
      name: "hấp dẫn",
      value: 2
    }, {
      name: "học phí hấp dẫn",
      value: 2
    }, {
      name: "hội thảo",
      value: 2
    }, {
      name: "ks rmit",
      value: 2
    }, {
      name: "kết quả",
      value: 2
    }, {
      name: "kỹ thuật",
      value: 2
    }, {
      name: "rmit vn",
      value: 2
    }, {
      name: "theo dõi",
      value: 2
    }, {
      name: "thông tin",
      value: 2
    }, {
      name: "thắc mắc",
      value: 2
    }, {
      name: "trả lời",
      value: 2
    }, {
      name: "trải nghiệm",
      value: 2
    }, {
      name: "tuyển sinh",
      value: 2
    }, {
      name: "tân sinh",
      value: 2
    }, {
      name: "việt nam",
      value: 2
    }, {
      name: "yên tâm",
      value: 2
    }, {
      name: "bao gồm",
      value: 1
    }, {
      name: "bộ phận",
      value: 1
    }, {
      name: "chi phí",
      value: 1
    }, {
      name: "cung ứng",
      value: 1
    }, {
      name: "cám ơn",
      value: 1
    }, {
      name: "cảm ơn",
      value: 1
    }, {
      name: "dự bị",
      value: 1
    }, {
      name: "hiện tại",
      value: 1
    }, {
      name: "huong tran",
      value: 1
    }, {
      name: "hà nội",
      value: 1
    }, {
      name: "học bổng",
      value: 1
    }, {
      name: "kinh doanh",
      value: 1
    }, {
      name: "kinh nghiệm",
      value: 1
    }, {
      name: "kinh tế tài",
      value: 1
    }, {
      name: "kiểm tra",
      value: 1
    }, {
      name: "làm việc",
      value: 1
    }, {
      name: "lệ phí",
      value: 1
    }, {
      name: "ngoài lề",
      value: 1
    }, {
      name: "ngu ngốc hồng heo",
      value: 1
    }, {
      name: "nhóm ngành khinh doanh",
      value: 1
    }, {
      name: "quản lý",
      value: 1
    }, {
      name: "quốc tế",
      value: 1
    }, {
      name: "rồi đây",
      value: 1
    }, {
      name: "sinh viên",
      value: 1
    }, {
      name: "summer camp",
      value: 1
    }, {
      name: "sẵn sàng",
      value: 1
    }]
  }
};