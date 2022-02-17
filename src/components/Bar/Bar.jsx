import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

function Bar({ labelData, bmiData }) {
    const data = {
        labels: labelData,
        datasets: [
            {
                label: 'BMI',
                data: bmiData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    };

    const options = {
        responsive: true,
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}

export default Bar;