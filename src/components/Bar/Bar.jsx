import './Bar.css';

import { Chart, Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Bar({ labelData, bmiData }) {
    const data = {
        labels: labelData,
        datasets: [
            {
                data: bmiData,
                fill: false,
                lineTension: 0.1,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart BMI Tracker',
            },
        },
    }

    return (
        <div className="bar">
            <Line data={data} options={options} />
        </div>
    )
}

export default Bar;