import React, { useState } from 'react'
import Relevantz from '../../../assests/Relevantz.png'
import { Link,Router, Routes,Route, Switch, BrowserRouter } from 'react-router-dom'
import { FaBars, FaBookOpenReader } from "react-icons/fa6";
import { FaSearch, FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import '../../../Styles/Admindashboard/Navbar.css'
import Image from 'react-bootstrap/Image';
import Home from './Home';
import Course from './Course';

function AdminNavbar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [searchTerm, setSearchTerm] = React.useState('');

  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const handlePageChange = (page) => {
    setActivePage(page);
    if (!showSideNav) {
      setShowSideNav(true);
    }
    if (page === 'reports') {
      setShowReportDropdown(!showReportDropdown);
    }
    if (showReportDropdown) setShowReportDropdown(!showReportDropdown);
  };
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  // const Home = () => {
  //   return <h2>Home Page</h2>;
  // };

  // const Course = () => {
  //   return <h2>Submit Request Page</h2>;
  // };

  const Learner = () => {
    return <h2>Submit Request Page</h2>;
  };
  const Reports = () => {
    return <h2>Submit Request Page</h2>;
  };
  const LearnerReport = () => {
    return <h2>Track Page 1</h2>;
  };

  const CourseReport = () => {
    return <h2>Track Page 2</h2>;
  };

  const Enroll = () => {
    return <h2>Track Page 3</h2>;
  };
  const Quiz = () => {
    return <h2>Track Page 3</h2>;
  };

  return (
    <div className="dashboard">
      <div className='top-nav'>
        <button className="menu-btn" onClick={toggleSideNav}>
          <FaBars />
        </button>
        <div className='nav-img'>
          <Image src={Relevantz} fluid />
        </div>

        <div className="user-info">
          <FaSearch className='search-icon' />
          <input
            onChange={handleChange}
            type="search"
            placeholder="Search..."
            value={searchTerm}
            className='search-box'
          />

        </div>

      </div>
      <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
        <ul>
        <Link to="/">
          <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
            <FaHome className='icon' /> {/* Icon for Home */}
            {showSideNav && <span>Home</span>}
          </li>
          </Link>
         
          <li className={activePage === 'course' ? 'active' : ''} onClick={() => handlePageChange('course')}>
            <Link to="/course">
              <FaBookOpenReader className='icon' />           
              {showSideNav &&<span>Course</span>}
            </Link>
          </li>
          
          <li
            className={activePage === 'learner' ? 'active' : ''}
            onClick={() => handlePageChange('learner')}
          >
            <FaUserGraduate className='icon' /> {/* Icon for Tracking */}
            {showSideNav && <span>Learner</span>}
          </li>
          <li className='reports' onClick={() => handlePageChange('reports')}>
            <FaChartBar className='icon' />
            {showSideNav && <span>Reports</span>}


          </li>
        </ul>
        <ul className={`submenu ${showReportDropdown ? 'open' : ''}`}>
          <li onClick={() => setActivePage('learnerreport')}> Learner Report</li>
          <li onClick={() => setActivePage('coursereport')}>Course Report</li>
          <li onClick={() => setActivePage('enroll')}>Enrollment Report</li>
          <li onClick={() => setActivePage('quiz')}>Quiz Report</li>
        </ul>
      </div>

      {/* <div className="main-content">
        
    
        {activePage === 'home' && <Home />}
        {activePage === 'course' && <Course/>}
        {activePage === 'learner' && <Learner />}
        {activePage === 'reports' && <Reports />}
        {activePage === 'learnerreport' && <LearnerReport />}
        {activePage === 'coursereport' && <CourseReport />}
        {activePage === 'enroll' && <Enroll />}
        {activePage === 'quiz' && <Quiz />}

      </div> */}
    </div>
  )
}

export default AdminNavbar
