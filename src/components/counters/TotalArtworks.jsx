import React, { Component } from 'react';
import { ArtworksContext } from '../../contexts/artworks.context';
import ReactApexChart from 'react-apexcharts';

class TotalArtworks extends Component {
  static contextType = ArtworksContext;

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
                  return val;
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
        labels: ['Total Artworks'],
      },
    };
  }

  render() {
    const { artworks } = this.context;
    const total = [this.context.length];

    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={total} type="radialBar" height={200} width={200} />
      </div>
    );
  }
}

export default TotalArtworks;