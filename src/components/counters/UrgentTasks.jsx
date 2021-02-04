import React, { Component } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import ReactApexChart from 'react-apexcharts';

class ImplementedArtworks extends Component {
  static contextType = TasksContext;

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          height: 200,
          width: 200,
          type: 'radialBar',
          offsetY: -10,
          sparkline: {
            enabled: true
          }
        },
        grid: {
          padding: {
              right: 0,
              left: 0,
          }
      	},
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '14px',
                color: 'rgba(0, 0, 0, 0.87)',
                offsetY: 80
              },
              value: {
                offsetY: 40,
                fontSize: '18px',
                color: 'rgba(0, 0, 0, 0.87)',
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 2
        },
        labels: ['Urgent Tasks'],
      },
    };
  }

  render() {
    const { tasks } = this.context;
    const urgent = [];
    this.context.map(task => task.priority === 'High' ? urgent.push(task) : task);

    let ratio;
    if (urgent.length !== 0) {
      ratio = [(urgent.length / this.context.length) * 100];
    } else {
      ratio = [0];
    };

    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={ratio} type="radialBar" height={200} width={200} />
      </div>
    );
  }
}

export default ImplementedArtworks;