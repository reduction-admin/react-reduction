export const productsData = [
  {
    id: 1,
    image: '/img/products/product_640-1.jpg',
    title: 'Admin Template',
    description: 'Responsive admin template...',
    right: '$36',
  },
  {
    id: 2,
    image: '/img/products/product_640-2.jpg',
    title: 'Schedule App',
    description: 'Manage your schedule...',
    right: '$9',
  },
  {
    id: 3,
    image: '/img/products/product_640-3.jpg',
    title: 'Chat App',
    description: 'Realtime chat application...',
    right: '$12',
  },
  {
    id: 4,
    image: '/img/products/product_640-4.jpg',
    title: 'Wordpress Business Theme',
    description: 'Over 100+ templates and pages...',
    right: '$24',
  },
  {
    id: 5,
    image: '/img/products/product_640-5.jpg',
    title: 'Camera App',
    description: 'Over 30+ filter...',
    right: '$6.99',
  },
  {
    id: 6,
    image: '/img/products/product_640-6.jpg',
    title: 'Calendar App',
    description: 'Organize your schedule...',
    right: '$0.99',
  },
];

export const userProgressTableData = [
  {
    avatar: '/img/users/100_1.jpg',
    name: 'Tom',
    date: '3 month ago',
    progress: 75,
  },
  {
    avatar: '/img/users/100_2.jpg',
    name: 'Jamy',
    date: '1 year ago',
    progress: 60,
  },
  {
    avatar: '/img/users/100_3.jpg',
    name: 'Sim',
    date: '2 hour ago',
    progress: 50,
  },
  {
    avatar: '/img/users/100_4.jpg',
    name: 'Jamy',
    date: 'a month ago',
    progress: 40,
  },
  {
    avatar: '/img/users/100_5.jpg',
    name: 'Jamy',
    date: '6 months ago',
    progress: 30,
  },
  {
    avatar: '/img/users/100_6.jpg',
    name: 'Jamy',
    date: '2 years ago',
    progress: 25,
  },
];

export const supportTicketsData = [
  {
    id: 1,
    avatar: '/img/users/100_1.jpg',
    name: 'Sim',
    date: '30 mins ago',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'pending',
  },
  {
    id: 2,
    avatar: '/img/users/100_2.jpg',
    name: 'Jane',
    date: '1 hour ago',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'open',
  },
  {
    id: 3,
    avatar: '/img/users/100_3.jpg',
    name: 'Tom',
    date: 'yesterday',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'closed',
  },
];

export const todosData = [
  { id: 1, title: 'task -1', done: true },
  { id: 2, title: 'task -2', done: false },
  { id: 3, title: 'task -3', done: true },
  { id: 4, title: 'task -4', done: true },
  { id: 5, title: 'task -5', done: false },
];

export const chartjs = {
  bar: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Expense for this year',
          backgroundColor: '#6a82fb',
          stack: 'Expense',
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
        },
        {
          label: 'Expense for last year',
          backgroundColor: '#fc5c7d',
          stack: 'Expense',
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  doughnut: {
    data: {
      datasets: [
        {
          data: [20, 30, 40, 50, 60],
          backgroundColor: [
            '#6a82fb',
            '#fc5c7d',
            '#45b649',
            '#00c9ff',
            '#ffd700',
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart',
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  },
  line: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue for this year',
          borderColor: '#6a82fb',
          backgroundColor: '#6a82fb',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },

        {
          label: 'Revenue for last year',
          borderColor: '#fc5c7d',
          backgroundColor: '#fc5c7d',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Month',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};
