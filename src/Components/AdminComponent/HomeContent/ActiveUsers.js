import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCheck } from "react-icons/fa6";
function ActiveUsers() {
    const [newUserCount, setNewUserCount] = useState(0);

    useEffect(() => {
        // Fetch new user count from backend API
        axios.get('your-backend-api-url')
            .then(response => {
                setNewUserCount(response.data.newUserCount);
            })
            .catch(error => {
                console.error('Error fetching new user count:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="newlearner-card">
            <FaUserCheck className="newlearner-icon" />
            <div className="newlearner-info">
                <h3>Active User</h3>
                <p className="newlearner-count">{newUserCount}</p>
            </div>
        </div>
    )
}

export default ActiveUsers
