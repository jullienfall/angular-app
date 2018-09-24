import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  data: any;
  options: any;
  type: any;

  constructor() {
    this.type = 'horizontalBar';
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      hoverBorderWidth: 5,
      datasets: [
        {
          label: '1st',
          backgroundColor: '#33f',
          data: [65, 59, 80, 81, 56, 55, 40],

          // hover
          hoverBackgroundColor: '#f4f'
        },
        {
          label: '2nd',
          backgroundColor: '#778877',
          data: [28, 48, 40, 19, 86, 27, 90],
          hoverBackgroundColor: '#f44'
        }
      ]
    };

    this.options = {
      title: {
        display: true,
        text: 'Chart',
        fontSize: 16
      },
      legend: {
        position: 'top'
      },
      hover: {
        mode: 'single'
      },
      tooltips: {
        mode: 'point',
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
            label += ' result: ';
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label;
          },
          title: function(tooltipItems, data) {
            var title;
            tooltipItems.map(function(tooltipItem) {
              title = data.datasets[tooltipItem.datasetIndex].title || '';
              title += tooltipItem.xLabel;
              if (tooltipItem.xLabel == 'May') {
                title += '**';
              }
            });
            return title;
          }
        }
      },
      // add km
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value) {
                return value + 'km';
              }
            }
          }
        ]
      }
    };
  }
}
