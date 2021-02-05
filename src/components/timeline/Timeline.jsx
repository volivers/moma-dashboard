import React, { Component } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import moment from 'moment';
import _ from 'lodash';
import ReactApexChart from 'react-apexcharts';
import ScheduleIcon from '@material-ui/icons/Schedule';

class Timeline extends Component {
  static contextType = TasksContext;

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: 'smooth',
          dashArray: [0, 3, 3, 3]
        },
        title: {
          text: 'Number of Tasks per Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        legend: {
          show: true,
          position: 'top',
        }
      },
    };
  }

  render() {
    const { tasks } = this.context;

    const month = item => moment(item.date, 'YYYY-MM-DD').format('MMM');
    const groups = _(this.context)
      .groupBy(month)
      .mapValues(items => _.map(items, 'priority'))
      .value()

    const highCount = (month) => {
      const high = [];
      month.map(item => {
        if (item === 'High') { high.push(item) };
        return item;
      });
      return high.length;
    };

    const mediumCount = (month) => {
      const medium = [];
      month.map(item => {
        if (item === 'Medium') { medium.push(item) };
        return item;
      });
      return medium.length;
    };

    const lowCount = (month) => {
      const low = [];
      month.map(item => {
        if (item === 'Low') { low.push(item) };
        return item;
      });
      return low.length;
    };

    const series = [
      {
        name: "All tasks",
        data: [
          groups.Jan.length,
          groups.Feb.length,
          groups.Mar.length,
          groups.Apr.length,
          groups.May.length,
          groups.Jun.length
        ]
      },
      {
        name: "Low priority",
        data: [
          lowCount(groups.Jan),
          lowCount(groups.Feb),
          lowCount(groups.Mar),
          lowCount(groups.Apr),
          lowCount(groups.May),
          lowCount(groups.Jun)
        ]
      },
      {
        name: "Medium priority",
        data: [
          mediumCount(groups.Jan),
          mediumCount(groups.Feb),
          mediumCount(groups.Mar),
          mediumCount(groups.Apr),
          mediumCount(groups.May),
          mediumCount(groups.Jun)
        ]
      },
      {
        name: "High priority",
        data: [
          highCount(groups.Jan),
          highCount(groups.Feb),
          highCount(groups.Mar),
          highCount(groups.Apr),
          highCount(groups.May),
          highCount(groups.Jun)
        ]
      }
    ];
    
    return (
      <div className="wrapper-timeline">
        <div className="title-wrapper">
          <h2><ScheduleIcon /> Timeline</h2>
        </div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={series} type="line" height={350} />
        </div>
      </div>
    );
  }
}

export default Timeline;