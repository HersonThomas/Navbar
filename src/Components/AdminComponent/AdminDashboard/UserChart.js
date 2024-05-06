
import React from 'react'
import { Line } from 'react-chartjs-2'
import { lineChartData } from '../../../Fakedata'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
function UserChart() {
    const options = {}
    return (
        <div>
            <Line options={options} data={lineChartData} />
        </div>
    )
}

export default UserChart
