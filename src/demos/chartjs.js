import ChartJS from 'chart.js';
import { getColor } from 'utils/colors';

export const getStackLineChart = ({ labels, data }) => canvas => {
  const ctx = canvas.getContext('2d');
  let gradient = ctx.createLinearGradient(0, 0, 0, 240);
  gradient.addColorStop(
    0,
    ChartJS.helpers
      .color('#00c9ff')
      .alpha(1)
      .rgbString()
  );
  gradient.addColorStop(
    1,
    ChartJS.helpers
      .color('#00c9ff')
      .alpha(0.2)
      .rgbString()
  );

  return {
    labels,
    datasets: [
      {
        data,
        label: 'My First dataset',
        borderColor: getColor('primary'),
        backgroundColor: gradient,
        fill: 'origin',
      },
    ],
  };
};

export const stackLineChartOptions = {
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
  // elements: {
  //   line: {
  //     tension: 0, // disables bezier curves
  //   },
  // },
};
