import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Chi', 'Thu'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [
                    'red',
                    'green',
                ],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Biểu đồ tròn',
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
