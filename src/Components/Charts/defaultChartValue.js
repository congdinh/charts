import Highcharts from 'highcharts/highstock';

const PieChartOption = (config, title, subtitle, events, labelName, legend, series) => {
  const { fontFamily, titleTextColor, titleFontSize, subtitleTextColor, subtitleFontSize  } = config;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title,
      align: 'center',
      verticalAlign: 'middle',
      style: {
        color: titleTextColor,
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: titleFontSize
      },
      y: -55
    },
    subtitle: {
      text: subtitle ? Highcharts.numberFormat(subtitle, 0, '.', ',') : null,
      verticalAlign: 'middle',
      align: 'center',
      y: 10,
      style: {
        color: subtitleTextColor,
        fontSize: subtitleFontSize,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.name} (<b>{point.y}</b> ${labelName})`,
      shared: true
    },
    legend: legend,
    plotOptions: {
      pie: {
        allowPointSelect: false,
        stacking: 'percent',
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.name} (<b>{point.y}</b> ${labelName})`,
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        },
        showInLegend: true,
        shadow: false,
        colorByPoint: true,
        center: ['50%', '50%']
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const ColumnChartOption = (config, title, subtitle, events, labelName, dataLabels, tooltip, legend, stacking, grouping, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth, borderRadius, maxPointWidth } = config;
  const { categories = [], title: xAxisTitle } = xAxis;
  const { min = 0, type, allowDecimals = true, title : yAxisTitle } = yAxis;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      type: type,
      allowDecimals: allowDecimals,
      stackLabels: {
        enabled: yAxis.stackLabels ? true : false,
        style: {
          fontWeight: 'bold',
          color: '#2c2c2c'
        },
        formatter: function() {
          return `${Highcharts.numberFormat(this.total, 0, '.', ',')} 
            ${yAxis.stackLabels}`;
        }
      }
    },
    tooltip: (stacking !== 'percent') ? tooltip : {
      shared: true,
      pointFormat: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.series.name} (<b>{point.y} ${labelName})</b><br/>`,
    },
    legend: legend,
    plotOptions: {
      column: {
        stacking: stacking,
        grouping: grouping, //group column
        borderRadius: borderRadius,
        maxPointWidth: maxPointWidth,
        cursor: 'pointer',
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (stacking && stacking === 'percent') {
              if (this.percentage > 0) return `${Highcharts.numberFormat(this.percentage, 1, '.', ',')}%`;
            } else {
              if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
            }
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const LineChartOption = (config, title, subtitle, events, labelName, dataLabels, marker, tooltip, legend, stacking, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth } = config;
  const { categories = [], title: xAxisTitle } = xAxis;
  const { min = 0, allowDecimals = true, title : yAxisTitle } = yAxis;
  const { fillColor: fillColorMarker, lineWidth: lineWidthMarker, lineColor: lineColorMarker } = marker;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle,
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      allowDecimals: allowDecimals
    },
    tooltip: tooltip,
    legend: legend,
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          symbol: 'circle',
          fillColor: fillColorMarker,
          lineWidth: lineWidthMarker,
          lineColor: lineColorMarker
        },
        cursor: 'pointer',
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const SplineChartOption = (config, title, subtitle, events, labelName, dataLabels, marker, tooltip, legend, stacking, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth } = config;
  const { categories = [], title: xAxisTitle } = xAxis;
  const { min = 0, allowDecimals = true, title : yAxisTitle } = yAxis;
  const { fillColor: fillColorMarker, lineWidth: lineWidthMarker, lineColor: lineColorMarker } = marker;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'spline'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle,
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      allowDecimals: allowDecimals
    },
    tooltip: tooltip,
    legend: legend,
    plotOptions: {
      spline: {
        marker: {
          enabled: true,
          symbol: 'circle',
          fillColor: fillColorMarker,
          lineWidth: lineWidthMarker,
          lineColor: lineColorMarker
        },
        cursor: 'pointer',
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const BarChartOption = (config, title, subtitle, events, labelName, dataLabels, tooltip, legend, stacking, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth, borderRadius, maxPointWidth } = config;
  const { categories = [], title: xAxisTitle, labels = {}, max, scrollbar } = xAxis;
  const { min = 0, type, allowDecimals = true, title : yAxisTitle } = yAxis;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'bar'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle,
      labels: labels,
      max: max,
      scrollbar: scrollbar
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      type: type,
      allowDecimals: allowDecimals,
      stackLabels: {
        enabled: yAxis.stackLabels ? true : false,
        style: {
          fontWeight: 'bold',
          color: '#2c2c2c'
        },
        formatter: function() {
          return `${Highcharts.numberFormat(this.total, 0, '.', ',')} 
            ${yAxis.stackLabels}`;
        }
      }
    },
    tooltip: (stacking !== 'percent') ? tooltip : {
      shared: true,
      pointFormat: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.series.name} (<b>{point.y} ${labelName})</b><br/>`,
    },
    legend: legend,
    plotOptions: {
      bar: {
        stacking: stacking,
        borderRadius: borderRadius,
        maxPointWidth: maxPointWidth,
        cursor: 'pointer',
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (stacking && stacking === 'percent') {
              if (this.percentage > 0) return `${Highcharts.numberFormat(this.percentage, 1, '.', ',')}%`;
            } else {
              if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
            }
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const AreaChartOption = (config, title, subtitle, events, labelName, dataLabels, marker, tooltip, legend, stacking, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth, borderRadius, maxPointWidth } = config;
  const { categories = [], title: xAxisTitle, labels = {} } = xAxis;
  const { min = 0, type, allowDecimals = true, title : yAxisTitle } = yAxis;
  const { fillColor: fillColorMarker, lineWidth: lineWidthMarker, lineColor: lineColorMarker } = marker;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'area'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle,
      labels: labels
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      type: type,
      allowDecimals: allowDecimals,
      stackLabels: {
        enabled: yAxis.stackLabels ? true : false,
        style: {
          fontWeight: 'bold',
          color: '#2c2c2c'
        },
        formatter: function() {
          return `${Highcharts.numberFormat(this.total, 0, '.', ',')} 
            ${yAxis.stackLabels}`;
        }
      }
    },
    tooltip: (stacking !== 'percent') ? tooltip : {
      shared: true,
      pointFormat: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.series.name} (<b>{point.y} ${labelName})</b><br/>`,
    },
    legend: legend,
    plotOptions: {
      area: {
        stacking: stacking,
        borderRadius: borderRadius,
        maxPointWidth: maxPointWidth,
        fillOpacity: 0.5,
        cursor: 'pointer',
        marker: {
          enabled: true,
          symbol: 'circle',
          fillColor: fillColorMarker,
          lineWidth: lineWidthMarker,
          lineColor: lineColorMarker
        },
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (stacking && stacking === 'percent') {
              if (this.percentage > 0) return `${Highcharts.numberFormat(this.percentage, 1, '.', ',')}%`;
            } else {
              if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
            }
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const AreaSplineChartOption = (config, title, subtitle, events, labelName, dataLabels, marker, tooltip, legend, stacking, xAxis, yAxis, series) => {
  const { fontFamily, zoomType, lineColor, lineWidth, borderRadius, maxPointWidth } = config;
  const { categories = [], title: xAxisTitle, labels = {} } = xAxis;
  const { min = 0, type, allowDecimals = true, title : yAxisTitle } = yAxis;
  const { fillColor: fillColorMarker, lineWidth: lineWidthMarker, lineColor: lineColorMarker } = marker;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      zoomType: zoomType,
      type: 'areaspline'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
      categories: categories,
      lineColor: lineColor,
      lineWidth: lineWidth,
      title: xAxisTitle,
      labels: labels,
    },
    yAxis: {
      min: min,
      title: yAxisTitle,
      lineColor: lineColor,
      lineWidth: lineWidth,
      type: type,
      allowDecimals: allowDecimals,
      stackLabels: {
        enabled: yAxis.stackLabels ? true : false,
        style: {
          fontWeight: 'bold',
          color: '#2c2c2c'
        },
        formatter: function() {
          return `${Highcharts.numberFormat(this.total, 0, '.', ',')} 
            ${yAxis.stackLabels}`;
        }
      }
    },
    tooltip: (stacking !== 'percent') ? tooltip : {
      shared: true,
      pointFormat: `<b style="color:{point.color}">{point.percentage:.1f}%</b> {point.series.name} (<b>{point.y} ${labelName})</b><br/>`,
    },
    legend: legend,
    plotOptions: {
      areaspline: {
        stacking: stacking,
        borderRadius: borderRadius,
        maxPointWidth: maxPointWidth,
        fillOpacity: 0.5,
        cursor: 'pointer',
        marker: {
          enabled: true,
          symbol: 'circle',
          fillColor: fillColorMarker,
          lineWidth: lineWidthMarker,
          lineColor: lineColorMarker
        },
        dataLabels: {
          enabled: dataLabels,
          format: '',
          formatter: function() {
            if (stacking && stacking === 'percent') {
              if (this.percentage > 0) return `${Highcharts.numberFormat(this.percentage, 1, '.', ',')}%`;
            } else {
              if (this.y > 0) return `${Highcharts.numberFormat(this.y, 0, '.', ',')} ${labelName}`;
            }
          }
        }
      },
      series: {
        events: events
      }
    },
    series: series
  };
};

const SolidGaugeChartOption = (config, title, subtitle, total, events, labelName, legend) => {
  const { fontFamily } = config;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      style: {
        fontFamily: fontFamily
      },
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      },
      type: 'solidgauge'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    pane: {
      center: ['50%', '50%'],
      size: '85%',
      startAngle: -180,
      endAngle: 180,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '75%',
        outerRadius: '100%',
        shape: 'arc',
        borderWidth: 0,
        borderColor: 'transparent'
      }
    },
    tooltip: {
      shared: true,
      pointFormat: `<b style="color:{point.color}">{point.y:.1f}%</b> {point.series.name} (<b>${total} ${labelName})</b><br/>`,
    },
    legend: legend,
    plotOptions: {
      solidgauge: {
        innerRadius: '75%',
        dataLabels: {
          y: 5,
          borderWidth: 0,
          align: 'center',
          verticalAlign: 'middle',
          overflow: true,
          useHTML: true,
          crop: false,
          style: {
            textalign: 'center'
          },
          format: `<p style="color:{point.color};text-align:center">{point.series.name}</span><br/>{point.y:.1f}%</p>`
        }
      },
      series: {
        events: events
      }
    }
  };
};

const WordCloudChartOption = (config, title, tooltip, toolbox, series) => {
  const { fontFamily = 'sans-serif', fontWeight = 'normal' } = config;
  return {
    title: title,
    tooltip: tooltip,
    toolbox: toolbox,
    series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [14, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [0,0],
        rotationStep: 0,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        // Data is an array. Each array item must have name and value property.
        data: series
    }]
  };
};

export {
  PieChartOption,
  ColumnChartOption,
  LineChartOption,
  SplineChartOption,
  BarChartOption,
  AreaChartOption,
  AreaSplineChartOption,
  SolidGaugeChartOption,
  WordCloudChartOption,
}