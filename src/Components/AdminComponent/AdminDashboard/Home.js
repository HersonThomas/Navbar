import React from 'react'
import '../../../Styles/Admindashboard/Home.css'
import Newlearner from '../HomeContent/Newlearner'
import NewCourse from '../HomeContent/NewCourse'
import ActiveUsers from '../HomeContent/ActiveUsers'
import MyCalender from '../HomeContent/MyCalender'
import UserChart from './UserChart'
import CourseChart from './CourseChart'
import EnrolledChart from './EnrolledChart'
function Home() {
    return (
        <div id='home-component'>
            <div className="home">
                <div className="card"><Newlearner /></div>
                <div className="card"><NewCourse /></div>
                <div className="card"><ActiveUsers /></div>
            </div>
            <div className="home">
            <div className='calendar-container'><MyCalender /></div>
            <div className='userchart'><UserChart /></div>
            </div>
            <div  className="home">
            <div className='coursechart'><CourseChart/></div>
            <div className='enrollchart'><EnrolledChart/></div>
            </div>
        </div>
    )
}

export default Home
