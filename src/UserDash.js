import React, { useState } from 'react';
import './UserDash.css';
import { FaHome, FaEnvelope, FaTruck } from 'react-icons/fa'; // Import icons

function UserDash() {
    const [showSideNav, setShowSideNav] = useState(false); // Initially collapsed
    const [activePage, setActivePage] = useState('home');
    const [showTrackingDropdown, setShowTrackingDropdown] = useState(false);

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        if (!showSideNav) {
            setShowSideNav(true);
        }
        if (page === 'tracking') {
            setShowTrackingDropdown(!showTrackingDropdown);
        }
        if(showTrackingDropdown) setShowTrackingDropdown(!showTrackingDropdown);
    };

    const Home = () => {
        return <h2>Home Page</h2>;
    };

    const SubmitRequest = () => {
        return <h2>Submit Request Page</h2>;
    };

    const Tracking = () => {
        return <h2>Tracking Page</h2>;
    };

    const Track1 = () => {
        return <h2>Track Page 1</h2>;
    };

    const Track2 = () => {
        return <h2>Track Page 2</h2>;
    };

    const Track3 = () => {
        return <h2>Track Page 3</h2>;
    };

    return (
        <div className="dashboard">
            <div className="top-nav">
                <button className="menu-btn" onClick={toggleSideNav}>
                    Menu
                </button>
                <div className="user-info">
                    <span>Welcome, User</span>
                    <button className="logout-btn" onClick={() => alert('Logout')}>
                        Logout
                    </button>
                </div>
            </div>
            <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
                <ul>
                    <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
                        <FaHome /> {/* Icon for Home */}
                        {showSideNav && <span>Home</span>}
                    </li>
                    <li className={activePage === 'submit' ? 'active' : ''} onClick={() => handlePageChange('submit')}>
                        <FaEnvelope /> {/* Icon for Submit Request */}
                        {showSideNav && <span>Submit Request</span>}
                    </li>
                    <li className={activePage === 'tracking' ? 'active' : ''} onClick={() => handlePageChange('tracking')}>
                        <FaTruck /> {/* Icon for Tracking */}
                        {showSideNav && <span>Tracking</span>}
                    </li>
                </ul>
                <ul className={`submenu ${ showTrackingDropdown ? 'open' : ''}`}>
                    <li onClick={() => setActivePage('track1')}>Track 1</li>
                    <li onClick={() => setActivePage('track2')}>Track 2</li>
                    <li onClick={() => setActivePage('track3')}>Track 3</li>
                </ul>
            </div>
            <div className="main-content">
                {/* Render different components based on the activePage state */}
                {activePage === 'home' && <Home />}
                {activePage === 'submit' && <SubmitRequest />}
                {activePage === 'tracking' && <Tracking />}
                {activePage === 'track1' && <Track1 />}
                {activePage === 'track2' && <Track2 />}
                {activePage === 'track3' && <Track3 />}
            </div>
        </div>
    );
}

export default UserDash;
