import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      tooltips: {
        mode: 'nearest',
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
              label += '::';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label;
          }
        }
      },
      // add km
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value, index, values) {
                return value + 'km';
              }
            }
          }
        ]
      }
    };
  }
}
