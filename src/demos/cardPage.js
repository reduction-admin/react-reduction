import ChartJS from 'chart.js';
import { getColor } from 'utils/colors';

import bg5Image from 'assets/img/bg/background_1920-5.jpg';
import bg6Image from 'assets/img/bg/background_1920-6.jpg';
import bg7Image from 'assets/img/bg/background_1920-7.png';
import bg19Image from 'assets/img/bg/background_1920-19.jpg';

export const overlayCards = [
  { imgUrl: bg5Image },
  { imgUrl: bg6Image },
  { imgUrl: bg7Image },
  { imgUrl: bg19Image },
];

export const bgCards = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'info' },
  { color: 'warning' },
  { color: 'danger' },
  { color: 'success' },
];

export const gradientCards = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'info' },
  { color: 'warning' },
  { color: 'danger' },
  { color: 'success' },
];

export const chartjs = {
  line1Props: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: getColor('secondary'),
          backgroundColor: getColor('secondary'),
          data: [0, 13, 22, 34, 46, 35, 30],
          fill: 'origin',
        },
      ],
    },
    options: {
      tooltips: {
        intersect: false,
      },
      animation: {
        duration: 0,
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [{ display: false }],
      },
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        },
      },
    },
  },

  line2Props: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: '#6a82fb',
          backgroundColor: '#bcc7ff',
          data: [0, 13, 22, 34, 46, 35, 30],
          fill: 'origin',
        },
      ],
    },
    options: {
      tooltips: {
        intersect: false,
      },
      animation: {
        duration: 0,
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [{ display: false }],
      },
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        },
      },
    },
  },

  line3Props: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: '#6a82fb',
          backgroundColor: '#bcc7ff',
          data: [0, 13, 22, 34, 46, 35, 30],
          fill: 'origin',
        },
      ],
    },
    options: {
      tooltips: {
        intersect: false,
      },
      // animation: {
      //   duration: 0,
      // },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [{ display: false }],
      },
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        },
      },
    },
  },
};

export const chartJsGradient = {
  line1Props: {
    data: canvas => {
      const ctx = canvas.getContext('2d');
      let gradient = ctx.createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(
        0,
        ChartJS.helpers
          .color('#00c5dc')
          .alpha(0.7)
          .rgbString()
      );
      gradient.addColorStop(
        1,
        ChartJS.helpers
          .color('#f2feff')
          .alpha(0)
          .rgbString()
      );

      return {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'January',
          'February',
          'March',
          'April',
        ],
        datasets: [
          {
            label: 'Sales Stats',
            backgroundColor: gradient, // Put the gradient here as a fill color
            borderColor: '#0dc8de',

            pointBackgroundColor: ChartJS.helpers
              .color('#ffffff')
              .alpha(0)
              .rgbString(),
            pointBorderColor: ChartJS.helpers
              .color('#ffffff')
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: '#fc5c7d',
            pointHoverBorderColor: ChartJS.helpers
              .color('#000000')
              .alpha(0.2)
              .rgbString(),

            //fill: 'start',
            data: [
              20,
              10,
              18,
              15,
              26,
              18,
              15,
              22,
              16,
              12,
              12,
              13,
              10,
              18,
              14,
              24,
              16,
              12,
              19,
              21,
              16,
              14,
              21,
              21,
              13,
              15,
              22,
              24,
              21,
              11,
              14,
              19,
              21,
              17,
            ],
          },
        ],
      };
    },
    type: 'line',
    options: {
      title: {
        display: false,
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0.19,
        },
        point: {
          radius: 4,
          borderWidth: 12,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        },
      },
    },
  },
};
