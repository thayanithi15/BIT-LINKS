import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class ApexChartWeeklyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Desktops",
        data: [100, 41, 5, 51, 4, 62, 29, 91, 48]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Connection Trends by Weeks',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['1 week', '2 week', '3 week', '4 week', '1 week', '2 week', '3 week'],
        }
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
if (domContainer) {
  ReactDOM.render(<ApexChartWeeklyGraph />, domContainer);
} else {
  console.error('Target container is not a DOM element.');
}

export default ApexChartWeeklyGraph;
