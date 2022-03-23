import "../js/charts";

Chart.defaults.font.family = "Jost";
Chart.defaults.font.size = 16;
Chart.defaults.borderColor = '#465366';
Chart.defaults.color = '#cccccc';

{
    var lineChart = document.getElementById('lineChart').getContext('2d');

    const lineData = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Temp',
            borderColor: '#536DFE',
            pointBackgroundColor: '#cccccc',
            lineTension: 0.4,
            // fill: true,
            data: [22, 10, 7, 16, 20, 30, 31, 27, 21, 15, 17, 21],
        }]
    };

    const lineConfig = {
        type: 'line',
        data: lineData,
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

    new Chart(lineChart, lineConfig);
}

{
    var pieChart = document.getElementById('pieChart');

    const pieData = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            label: 'Dataset 1',
            data: [22, 10, 7, 16, 20],
            backgroundColor: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
            hoverOffset: 10
        }]
    };

    const pieConfig = {
        type: 'scatter',
        data: pieData,
        options: {
          responsive: true
        },
    };

    new Chart(pieChart, pieConfig);
}