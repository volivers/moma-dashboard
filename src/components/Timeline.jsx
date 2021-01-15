import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';
window.moment = moment


function generateData(count) {
  let i = 0;
  let series = [];
  while (i < count) {
    let y =
      Math.floor(Math.random() * 100);

    series.push(y);
    i++;
  }
  return series;
}

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: 'Jan',
          data: generateData(20)
        },
        {
          name: 'Feb',
          data: generateData(20)
        },
        {
          name: 'Mar',
          data: generateData(20)
        },
        {
          name: 'Apr',
          data: generateData(20)
        },
        {
          name: 'May',
          data: generateData(20)
        },
        {
          name: 'Jun',
          data: generateData(20)
        },
        {
          name: 'Jul',
          data: generateData(20)
        },
        {
          name: 'Aug',
          data: generateData(20)
        },
        {
          name: 'Sep',
          data: generateData(20)
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            tooltip: {
              enabled: false
            },
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                  name: 'High priority',
                  color: 'rgba(255, 69, 96, 0.85)'
                },
                {
                  name: 'Medium priority',
                  color: 'rgba(254, 176, 25, 0.85)'
                },
                {
                  name: 'Low priority',
                  color: 'rgba(0, 227, 150, 0.85)'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'Number of Tasks completed per Month'
        },
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
      </div>
    );
  }
}

export default Timeline;