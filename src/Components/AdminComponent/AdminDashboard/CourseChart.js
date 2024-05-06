import React from 'react'
import { Bar } from 'react-chartjs-2'
import { lineChartData } from '../../../Fakedata'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
)
function CourseChart() {
    const options={}
    return (
        <div>
            <Bar options={options} data={lineChartData}/>
        </div>
    )
}

export default CourseChart
