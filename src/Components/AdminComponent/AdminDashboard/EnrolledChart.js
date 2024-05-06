import React from 'react'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PieController,
    ArcElement
} from 'chart.js'
import { pieChart } from '../../../Fakedata'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PieController,
    ArcElement
)
function EnrolledChart() {
    const options={}
    return (
        <div>
            <Pie options={options} data={pieChart}/>
        </div>
    )
}

export default EnrolledChart
