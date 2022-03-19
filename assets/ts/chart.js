import "../js/charts";

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

Chart.defaults.font.family = "Jost";
Chart.defaults.font.size = 16;
Chart.defaults.borderColor = '#465366';
Chart.defaults.color = '#cccccc';

var ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: labels,
    datasets: [{
        label: 'Temp',
        borderColor: '#536DFE',
        pointBackgroundColor: '#cccccc',
        lineTension: 0.4,
        // fill: true,
        data: [22, 10, 7, 16, 20, 30, 31, 27, 21, 15, 17, 21],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        elements: {
            point: {
                radius: 5,
                hitRadius: 100
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#222831',
                borderColor: '#cccccc',
                borderWidth: 2,
                usePointStyle: true,
                padding: 10,
            }
        },
        scales: {
            y: {
                grid: {
                    borderDash: [5, 10],
                    borderDashOffset: 20
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    }
};

new Chart(ctx, config);